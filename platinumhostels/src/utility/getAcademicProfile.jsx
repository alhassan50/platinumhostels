export default async function getAcademicProfile(userTokenID) {
    try {
        if (!userTokenID) {
            throw new Error('Invalid user')
        }

        let response = await fetch(
          `https://platinumfunctions.netlify.app/.netlify/functions/getAcademicProfile`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userTokenID: userTokenID })
          }
        )

        /* let response = await fetch(
          `http://localhost:8888/.netlify/functions/getAcademicProfile`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userTokenID: userTokenID })
          }
        ) */
    
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
        
        const {academicProfile} = await response.json()
        
        //console.log(academicProfile);
        return academicProfile

        //console.log(academicProfile);
        
        /* let dummyResponse = []

        if (dummyResponse.length !== 0) {throw new Error('error')}

        return dummyResponse */
    
        /* return availableRoomsJSON.availableRooms;
        throw new Error("dummy error");
        return [] */
      } catch (error) {
        const errorMsg = error.message.replace(/"/g, '')
        //console.log("getAcademicProfile error: ", errorMsg);
        throw errorMsg;
      } 
}
