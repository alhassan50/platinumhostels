export default async function updatePersonalProfile(profileInfo, userTokenID) {
    //console.log(profileInfo);
    try {
        let response = await fetch(
          `https://platinumfunctions.netlify.app/.netlify/functions/updatePersonalProfile`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({profileInfo: profileInfo, userTokenID: userTokenID})
          }
        )
    
        /* let response = await fetch(
          `http://localhost:8888/.netlify/functions/updatePersonalProfile`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({profileInfo: profileInfo, userTokenID: userTokenID})
          }
        )
     */
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
        
        const user = await response.json()

        //console.log(user);

        return user
        
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
