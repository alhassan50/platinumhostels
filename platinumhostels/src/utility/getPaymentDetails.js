export default async function getPaymentDetails(userTokenID) {
    try {
        if (!userTokenID) {
            throw new Error ("Invalid user")
        }

        /* let response = await fetch('https://platinumfunctions.netlify.app/.netlify/functions/paymentDetails',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userTokenID: userTokenID }),
            }
        ) */
        
        let response = await fetch('http://localhost:8888/.netlify/functions/paymentDetails',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userTokenID: userTokenID }),
            }
        )
       
        if (!response.ok) {
            throw new Error(`Couldn't fetch payment details! Status: ${response.status}.`);
        }

        
        const paymentDetails = await response.json()

        //paymentDetails = {}

        if (Object.keys(paymentDetails).length === 0) {
            throw new Error('booking summary empty')
        }


        return paymentDetails;
    } catch (error) {
        console.log('error from getPaymentDetails fetch: ', error);
        //throw error
    }
}
