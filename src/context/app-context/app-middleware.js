import Razorpay from 'razorpay';

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
        case 'PAY':
            console.log("In payments..");
            const rzr_instance = new Razorpay({
                key_id: 'rzp_live_gNHIeaU4k2b504',
                key_secret: '1boq2XDGHXAWS2SP5tzOvZd0',
            });
            const options = {
                "type": 'link',
                "amount": 10000,
                "currency": "INR",
                "receipt": Date.now().toString()
            };

            (async () => {
                console.log(" rzr_instance.orders.",  rzr_instance.orders);
                const payment_link_response = await rzr_instance.invoices.create(options);
                console.log("payment_link_response: ", payment_link_response);
            })();
            break;    
        default: {
            dispatch(action);
            break;
        }
    };
};
