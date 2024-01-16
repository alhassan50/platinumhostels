import availableRooms from '../data/rooms.json';

const getAvailableRooms = async (hostelLocation, roomType, gender) => {
  /* Simulate an asynchronous delay */
  /* const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(50000); */ // Adjust the delay time as needed

  try {
    let responseRAW = await fetch(
      `http://localhost:8888/.netlify/functions/getAvailableRooms?hostelLocation=${hostelLocation}&roomType=${roomType}&gender=${gender}`, 
    )

    if (!responseRAW.ok) {
      throw new Error(`Couldn't fetch rooms! Status: ${responseRAW.status}.`);
    }
  
    /* console.log(availableRoomsStr); */
    
    const availableRoomsJSON = await responseRAW.json()

    return availableRoomsJSON.availableRooms;
  } catch (error) {
    console.log("get error: ", error);
    return error;
  }

  
  /* console.log("availableRoomsJSON.availableRooms: ", availableRoomsJSON.availableRooms);
  console.log("availableRooms: ", availableRooms); */
  
};

export default getAvailableRooms;
