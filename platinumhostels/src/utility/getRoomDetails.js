async function getRoomDetails(userTokenID) {
  try {
    if (!userTokenID) {
      throw new Error ("Invalid user token")
    }

    /* let roomStr = await fetch('http://localhost:8888/.netlify/functions/getRoomDetails',
        {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userTokenID: userTokenID }),
        }
    ) */
    
    let roomStr = await fetch('https://platinumfunctions.netlify.app/.netlify/functions/getRoomDetails',
      {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userTokenID: userTokenID }),
      }
    )
   
    if (!roomStr.ok) {
        throw new Error(`Couldn't fetch rooms! Status: ${roomStr.status}.`);
    }
    
    let roomJSON = await roomStr.json()

    if (Object.keys(roomJSON).length === 0) {
      throw new Error("Room details is empty")
    }

    return roomJSON;
  } catch (error) {
    //console.log('error from fetch function: ', error);
    throw error
  }
}

export default getRoomDetails;