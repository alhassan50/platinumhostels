export default async function updatePassword(email, currentPassword, newPassword, confirmNewPassword, userTokenID) {
    //console.log(profileInfo);
    try {
        /* let response = await fetch(
          `https://platinumfunctions.netlify.app/.netlify/functions/createAccount`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileInfo)
          }
        ) */

        let response = await fetch(
          `http://localhost:8888/.netlify/functions/updatePassword`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email, 
                currentPassword: currentPassword, 
                newPassword: newPassword, 
                confirmNewPassword: confirmNewPassword,
                userTokenID: userTokenID
            })
          }
        )
    
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
