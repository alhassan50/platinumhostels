export default async function createAccount(studentAccountData) {
    //console.log(studentAccountData);
    try {
        let response = await fetch(
          `https://platinumfunctions.netlify.app/.netlify/functions/createAccount`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentAccountData)
          }
        )
        
        /* let response = await fetch(
          `http://localhost:8888/.netlify/functions/createAccount`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentAccountData)
          }
        ) */
    
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
        
        const {accountData, uid} = await response.json()

        return {accountData: accountData, uid: uid}
        
        /* let dummyResponse = []

        if (dummyResponse.length !== 0) {throw new Error('error')}

        return dummyResponse */
    
        /* return availableRoomsJSON.availableRooms;
        throw new Error("dummy error");
        return [] */
      } catch (error) {
        const errorMsg = error.message.replace(/"/g, '')
        //console.log("createAccount error: ", errorMsg);
        throw errorMsg;
      }  
}
