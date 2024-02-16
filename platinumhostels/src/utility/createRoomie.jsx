export default async function createRoomie(accountData, uid) {
    //console.log(accountData);
    try {
        let response = await fetch(
          `https://platinumfunctions.netlify.app/.netlify/functions/createRoomie`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({accountData: accountData, uid: uid})
          }
        )
        
        /* let response = await fetch(
          `http://localhost:8888/.netlify/functions/createRoomie`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({accountData: accountData, uid: uid})
          }
        ) */
    
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
        
        /* let dummyResponse = []

        if (dummyResponse.length !== 0) {throw new Error('error')}

        return dummyResponse */
    
        /* return availableRoomsJSON.availableRooms;
        throw new Error("dummy error");
        return [] */
      } catch (error) {
        const errorMsg = error.message.replace(/"/g, '')
        //console.log("createRecord error: ", errorMsg);
        throw errorMsg;
      }  
}
