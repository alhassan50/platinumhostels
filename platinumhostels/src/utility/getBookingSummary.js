export default async function getBookingSummary(userTokenID) {
    try {
        /* let bookingSummaryStr = await fetch('http://localhost:8888/.netlify/functions/bookingSummary',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userTokenID: userTokenID }),
            }
        ) */

        
        let bookingSummaryStr = await fetch('https://platinumfunctions.netlify.app/.netlify/functions/bookingSummary',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userTokenID: userTokenID }),
            }
        )
       
        if (!bookingSummaryStr.ok) {
            throw new Error(`Couldn't fetch rooms! Status: ${bookingSummaryStr.status}.`);
        }

        
        const bookingSummaryJSON = await bookingSummaryStr.json()

        //bookingSummaryJSON = {}

        if (Object.keys(bookingSummaryJSON).length === 0) {
            throw new Error('booking summary empty')
        }


        return bookingSummaryJSON;
    } catch (error) {
        console.log('error from fetch: ', error);
        throw error
    }
}
