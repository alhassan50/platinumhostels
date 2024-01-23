export default async function createAccount(accountData) {
    console.log(accountData);
    try {
        /* let responseRAW = await fetch(
          `https://platinumfunctions.netlify.app/.netlify/functions/getAvailableRooms?hostelLocation=${hostelLocation}&roomType=${roomType}&gender=${gender}`, {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        ) */
        /* let customTokenStr = await fetch(
          `http://localhost:8888/.netlify/functions/createAccount`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(accountData)
          }
        )
    
        if (!customTokenStr.ok) {
          throw new Error(`Couldn't fetch rooms! Status: ${customTokenStr.status}.`);
        }
        
        const customTokenJSON = await customTokenStr.json()

        console.log(customTokenJSON); */
        
        let dummyResponse = []

        if (dummyResponse.length !== 0) {throw new Error('error')}

        return dummyResponse
    
        //return availableRoomsJSON.availableRooms;
        //throw new Error("dummy error");
        //return []
      } catch (error) {
        console.log("fetch error: ", error);
        //throw error;
      }  
}
