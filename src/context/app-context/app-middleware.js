import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export const AppMiddleware = (dispatch, state) => (action) => {
    switch (action.type) {
        case 'BUTTON_CLICKED':
            (async () => {
                const payload = {
                    feedback: {
                        button: action.payload
                    },
                    action: "SUBMIT_FEEDBACK"
                };

                await fetch('https://q44f17qqyi.execute-api.ap-south-1.amazonaws.com/prod/users', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                });
            })();
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