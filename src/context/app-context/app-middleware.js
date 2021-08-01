import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export const AppMiddleware = (dispatch, state) => (action) => {
    switch (action.type) {
        case 'UPLOAD_PDF_AND_ANALYZE':
            if (state.newBankStatementForm && 
                state.newBankStatementForm.phoneNumber && 
                state.newBankStatementForm.phoneNumber.trim().length >= 10 ) {
                (async () => {
                    const bankNameString = "hdfc";

                    const payload = {
                        base64Pdf: action.payload,
                        phoneNumber: state.newBankStatementForm.phoneNumber,
                        bankName: bankNameString,  
                        password: state.newBankStatementForm.bankStatementPassword ? state.newBankStatementForm.bankStatementPassword : "", 
                        action: "UPLOAD_BANK_STATEMENT"
                    }
                    dispatch({ type: 'BANKSTATEMENT_ANALYSIS_IN_PROGRESS' });
                    const response = await fetch('https://q44f17qqyi.execute-api.ap-south-1.amazonaws.com/prod/users', {
                        method: 'POST',
                        body: JSON.stringify(payload),
                    });

                    const responseJson = await response.json();
                    dispatch({ type: 'BANKSTATEMENT_ANALYSIS_FINISHED' });
                    if (responseJson.statusCode === 200) {
                        try{
                        const messageJson = JSON.parse(responseJson.message);
                        const bodyString = JSON.parse(messageJson.Payload).body;
                        let dataList = JSON.parse(bodyString);
                        dataList = addMonthName(dataList);
                        
                        var detailedTransactions = getDetailedTransactions(dataList);
                        dispatch({ type: 'ADD_DETAILED_TRANSACTIONS', payload: detailedTransactions });
                        }catch(ex) {
                            console.log("Exception occured with pdf analysis: ", ex);
                            dispatch({ type: 'BANKSTATEMENT_ANALYSIS_FAILURE' });
                        }
                    }
                    appendLog(action.type, state.profile.phoneNumber);
                })(); 
            }
            break; 
        case 'DOWNLOAD_BANK_ANALYSIS':
            if(state.bankStatementAnalysis) {
                const csvData = state.bankStatementAnalysis;
                const fileName = "bank-statement-analysis";
                exportToCSV(csvData,fileName);
                appendLog(action.type, state.profile.phoneNumber);
            }      
            break;
        case 'CALCULATE_FIXED_DEPOSIT_RATES':
            dispatch({ type: 'CLEAR_FIXED_DEPOSIT_RATES_RESULT' });
            const totalFixedDepositDays = getTotalDays(state.fixedDepositDuration);
            if(totalFixedDepositDays <= 0)
                return;

            let bankFdDayMap = 999999999;
            Object.keys(state.fixedDeposit).forEach((maxDaysCount) => {
                if(Number(maxDaysCount) >= Number(totalFixedDepositDays) && Number(maxDaysCount) < Number(bankFdDayMap))
                {   
                    bankFdDayMap = maxDaysCount;
                }
            });
            if(bankFdDayMap === 999999999) {
                return;
            }
            
            var banksRates = Object.entries(state.fixedDeposit[bankFdDayMap].publicBank).concat(Object.entries(state.fixedDeposit[bankFdDayMap].privateBank));
            banksRates.sort((bank1, bank2) => { return bank2[1] - bank1[1];});
            dispatch({ type: 'ADD_FIXED_DEPOSIT_RATES_RESULT' , payload: banksRates});
            appendLog(action.type, state.profile.phoneNumber);
            break;
        case 'UPDATE_BANKWISE_FIXED_DEPOSIT':
            const result = {};
            Object.entries(state.fixedDeposit).map(([duration, banksDetails]) => {
                Object.entries(banksDetails).map(([bankSector, bankNameInterest]) => {
                    Object.entries(bankNameInterest).map(([bankName, interestRate]) => {
                        if(result[bankName] === undefined) {
                            result[bankName] = {};
                        }
                        result[bankName][duration] = interestRate;
                    })
                });
            });   
            dispatch({ type: 'ADD_BANKWISE_FIXED_DEPOSIT_RESULT' , payload: result}); 
            break; 
        default: {
            dispatch(action);
            break;
        }
    };
};

const appendLog = (event, phoneNumber) => {
    (async () => {
        const logPayload = {
            phoneNumber,
            event,
            action: "APPEND_LOG"
        }

        await fetch('https://q44f17qqyi.execute-api.ap-south-1.amazonaws.com/prod/users', {
            method: 'POST',
            body: JSON.stringify(logPayload),
        });
    })(); 
}

const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const fileExtension = '.xlsx';

const exportToCSV = (csvData, fileName) => {
    const sheets = {};
    const sheetNames = [];
    
    if(csvData.detailedTransactions !== undefined) {
        const detailedTransactions = csvData.detailedTransactions.map((transaction) => {
            return {
                ...transaction,
                remarks: undefined,

            }
        });
        const detailedTransactionsSheet = XLSX.utils.json_to_sheet(detailedTransactions);
        sheets["detailedTransactions"] = detailedTransactionsSheet;
        sheetNames.push("detailedTransactions");
    }

    if(csvData.monthWiseTransactions !== undefined) {
        const monthWiseTransactions = Object.entries(csvData.monthWiseTransactions).map(([monthName, transaction]) => {
            return {
                "month year": monthName,
                "cr": transaction.cr,
                "crCount": transaction.crCount,
                "dr": transaction.dr,
                "drCount": transaction.drCount
            }
        });
        const monthWiseTransactionsSheet = XLSX.utils.json_to_sheet(monthWiseTransactions);
        sheets["monthWiseTransactions"] = monthWiseTransactionsSheet;
        sheetNames.push("monthWiseTransactions");
    }

    if(csvData.categoryWiseCreditTransactions !== undefined) {
        const categoryWiseCreditTransactions = Object.entries(csvData.categoryWiseCreditTransactions).map(([categoryName, transaction]) => {
            return {
                "category": categoryName,
                "cr": transaction.cr,
                "crCount": transaction.crCount,
            }
        });
        const categoryWiseCreditTransactionsSheet = XLSX.utils.json_to_sheet(categoryWiseCreditTransactions);
        sheets["categoryWiseCreditTransactions"] = categoryWiseCreditTransactionsSheet;
        sheetNames.push("categoryWiseCreditTransactions");
    }

    if(csvData.categoryWiseDebitTransactions !== undefined) {
        const categoryWiseDebitTransactions = Object.entries(csvData.categoryWiseDebitTransactions).map(([categoryName, transaction]) => {
            return {
                "category": categoryName,
                "dr": transaction.dr,
                "drCount": transaction.drCount,
            }
        });
        const categoryWiseDebitTransactionsSheet = XLSX.utils.json_to_sheet(categoryWiseDebitTransactions);
        sheets["categoryWiseDebitTransactions"] = categoryWiseDebitTransactionsSheet;
        sheetNames.push("categoryWiseDebitTransactions");
    }

    if(csvData.partyWiseCreditTransactions !== undefined) {
        const partyWiseCreditTransactions = Object.entries(csvData.partyWiseCreditTransactions).map(([partyName, transaction]) => {
            return {
                "party": partyName,
                "cr": transaction.cr,
                "crCount": transaction.crCount,
            }
        });
        const partyWiseCreditTransactionsSheet = XLSX.utils.json_to_sheet(partyWiseCreditTransactions);
        sheets["partyWiseCreditTransactions"] = partyWiseCreditTransactionsSheet;
        sheetNames.push("partyWiseCreditTransactions");
    }

    if(csvData.partyWiseDebitTransactions !== undefined) {
        const partyWiseDebitTransactions = Object.entries(csvData.partyWiseDebitTransactions).map(([partyName, transaction]) => {
            return {
                "party": partyName,
                "dr": transaction.dr,
                "drCount": transaction.drCount,
            }
        });
        const partyWiseDebitTransactionsSheet = XLSX.utils.json_to_sheet(partyWiseDebitTransactions);
        sheets["partyWiseDebitTransactions"] = partyWiseDebitTransactionsSheet;
        sheetNames.push("partyWiseDebitTransactions");
    }

    const wb = { Sheets: sheets, SheetNames: sheetNames};
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {type: fileType});
    FileSaver.saveAs(data, fileName + fileExtension);
}

const getTotalDays = (fixedDepositDuration) => {
    let result = 0;
    if(fixedDepositDuration.years !== "")
        result += Number(365 * fixedDepositDuration.years);
    if(fixedDepositDuration.months !== "")    
        result += Number(30 * fixedDepositDuration.months);
    if(fixedDepositDuration.days !== "")     
        result += Number(fixedDepositDuration.days);      
    return result;    
}

const addMonthName = (dataList) => {
    const result = [];
    dataList.forEach(transaction => {
        const newTransaction = transaction;
        newTransaction.date = getDetailedDate(transaction.date);
        if(transaction.party && transaction.party.trim().length > 0 && !isNaN(transaction.party)) {
            newTransaction.party = 'a/c no. - ' + newTransaction.party;
        }
        result.push(newTransaction);
    });

    return result;
}

const getDetailedTransactions = (dataList) => {
    const result = {};
    result["detailedTransactions"] = dataList;
    const monthWiseResult = {};
    const categoryWiseCreditResult = {};
    const categoryWiseDebitResult = {};
    const partyWiseCreditResult = {};
    const partyWiseDebitResult = {};
    dataList.forEach(transaction => {
        const monthYear = transaction.date.substring(3);
        const category = (transaction.cat != null) ? (transaction.cat).toString() : "null";
        const partyName = (transaction.party != null) ? (transaction.party).toString() : "null";

        if(monthWiseResult[monthYear] === undefined) {
            monthWiseResult[monthYear] = {
                "cr": 0,
                "crCount": 0,
                "dr": 0,
                "drCount": 0
            };
        }

        if(categoryWiseCreditResult[category] === undefined && transaction.cr !== null) {
            categoryWiseCreditResult[category] = {
                "cr": 0,
                "crCount": 0
            };  
        }

        if(categoryWiseDebitResult[category] === undefined && transaction.dr !== null) {
            categoryWiseDebitResult[category] = {
                "dr": 0,
                "drCount": 0
            };  
        }

        if(partyWiseCreditResult[partyName] === undefined && transaction.cr !== null) {
            partyWiseCreditResult[partyName] = {
                "cr": 0,
                "crCount": 0
            };  
        }

        if(partyWiseDebitResult[partyName] === undefined && transaction.dr !== null) {
            partyWiseDebitResult[partyName] = {
                "dr": 0,
                "drCount": 0
            };     
        }

        if(transaction.cr !== null)
        {
            monthWiseResult[monthYear].cr = (Number.parseFloat(monthWiseResult[monthYear].cr) + Number.parseFloat(transaction.cr)).toFixed(2);
            monthWiseResult[monthYear].crCount += 1;

            categoryWiseCreditResult[category].cr = (Number.parseFloat(categoryWiseCreditResult[category].cr) + Number.parseFloat(transaction.cr)).toFixed(2);
            categoryWiseCreditResult[category].crCount += 1;
            
            partyWiseCreditResult[partyName].cr = (Number.parseFloat(partyWiseCreditResult[partyName].cr) + Number.parseFloat(transaction.cr)).toFixed(2);
            partyWiseCreditResult[partyName].crCount += 1;
        } 
        else if(transaction.dr !== null)
        {
            monthWiseResult[monthYear].dr = (Number.parseFloat(monthWiseResult[monthYear].dr) + Number.parseFloat(transaction.dr)).toFixed(2);
            monthWiseResult[monthYear].drCount += 1;

            categoryWiseDebitResult[category].dr = (Number.parseFloat(categoryWiseDebitResult[category].dr) + Number.parseFloat(transaction.dr)).toFixed(2);
            categoryWiseDebitResult[category].drCount += 1;

            partyWiseDebitResult[partyName].dr = (Number.parseFloat(partyWiseDebitResult[partyName].dr) + Number.parseFloat(transaction.dr)).toFixed(2);
            partyWiseDebitResult[partyName].drCount += 1;
        }    
    });

    result["monthWiseTransactions"] = monthWiseResult;
    result["categoryWiseCreditTransactions"] = getSortedObject(categoryWiseCreditResult, "cr");
    result["categoryWiseDebitTransactions"] = getSortedObject(categoryWiseDebitResult, "dr");
    result["partyWiseCreditTransactions"] = getSortedObject(partyWiseCreditResult, "cr");
    result["partyWiseDebitTransactions"] = getSortedObject(partyWiseDebitResult, "dr");

    return result;
}

const getSortedObject = (originalObj, sortProperty) => {
    return Object.fromEntries(
        Object.entries(originalObj).sort((r1,r2) => {
            return +(Number.parseFloat(r2[1][sortProperty]) - Number.parseFloat(r1[1][sortProperty])).toFixed(2)
        }));
}

const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getDetailedDate = (date) => {
    let dateDetails = date.split("-");
    let newDate = dateDetails[0] + " " + months[Number.parseInt(dateDetails[1])] + " " + dateDetails[2];
    return newDate;
}