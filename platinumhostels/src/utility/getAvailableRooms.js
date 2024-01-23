const getAvailableRooms = async (hostelLocation, roomType, gender) => {
  try {
    let responseRAW = await fetch(
      `https://platinumfunctions.netlify.app/.netlify/functions/getAvailableRooms?hostelLocation=${hostelLocation}&roomType=${roomType}&gender=${gender}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    /* let responseRAW = await fetch(
      `http://localhost:8888/.netlify/functions/getAvailableRooms?hostelLocation=${hostelLocation}&roomType=${roomType}&gender=${gender}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
 */
    if (!responseRAW.ok) {
      throw new Error(`Couldn't fetch rooms! Status: ${responseRAW.status}.`);
    }
    
    const availableRoomsJSON = await responseRAW.json()

    return availableRoomsJSON.availableRooms;
    //throw new Error("dummy error");
    //return []
  } catch (error) {
    //console.log("fetch error: ", error);
    throw error;
  }  
};

export default getAvailableRooms;
