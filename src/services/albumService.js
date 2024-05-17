// albumService.js
const apiUrl = 'https://jsonplaceholder.typicode.com/albums';

export const fetchAlbums = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch albums: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching albums: ${error.message}`);
    }
  };

// add album
// export const addAlbum = async (albumData) => {
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(albumData),
//       });
  
//       if (!response.ok) {
//         throw new Error(`Failed to add album: ${response.statusText}`);
//       }
  
//       const newAlbum = await response.json();
//       return newAlbum;
//     } catch (error) {
//       throw new Error(`Error adding album: ${error.message}`);
//     }
//   };

export const addAlbum = async (albumData) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(albumData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to add album: ${response.statusText}`);
      }
  
      const newAlbum = await response.json();
      return newAlbum;
    } catch (error) {
      throw new Error(`Error adding album: ${error.message}`);
    }
  };
  

// export const updateAlbum = async (id, albumData) => {
//   const response = await fetch(`${apiUrl}/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(albumData),
//   });

//   if (!response.ok) {
//     throw new Error(`Failed to update album with id ${id}: ${response.statusText}`);
//   }

//   const updatedAlbum = await response.json();
//   return updatedAlbum;
// };

// albumService.js
export const updateAlbum = async (id, albumData) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(albumData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to update album with id ${id}: ${response.statusText}`);
      }
  
      const updatedAlbum = await response.json();
      return updatedAlbum;
    } catch (error) {
      throw new Error(`Error updating album: ${error.message}`);
    }
};

export const deleteAlbum = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Failed to delete album with id ${id}: ${response.statusText}`);
  }
};
