// AlbumList.js
import React, { useState, useEffect } from 'react';
import Album from './Album';
import AddAlbumForm from './AddAlbumForm'; // Import AddAlbumForm
import UpdateAlbumForm from './UpdateAlbumForm';
import { fetchAlbums, deleteAlbum, updateAlbum, addAlbum } from '../services/albumService';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAlbums();
      setAlbums(data);
    };

    fetchData();
  }, []);

  const handleDeleteAlbum = async (id) => {
    try {
      await deleteAlbum(id);
      setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleUpdateAlbum = (updatedAlbum) => {
    setAlbums((prevAlbums) =>
      prevAlbums.map((album) => (album.id === updatedAlbum.id ? updatedAlbum : album))
    );
    setSelectedAlbum(null);
  };

  const handleAddAlbum = async (newAlbum) => {
    try {
      const addedAlbum = await addAlbum(newAlbum);
  
      // Keep the previous state and add the new album at the beginning
      setAlbums((prevAlbums) => [addedAlbum, ...prevAlbums]);
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <div className="album-list-container">
      <h1 className='heading'>ALBUM LIST</h1>
      <AddAlbumForm onAddAlbum={handleAddAlbum} />
      {albums.map((album) => (
        <div key={album.id}>
          <Album
            album={album}
            onDeleteAlbum={() => handleDeleteAlbum(album.id)}
            onUpdateAlbum={() => setSelectedAlbum(album)}
          />
          {selectedAlbum && selectedAlbum.id === album.id && (
            <UpdateAlbumForm
              album={selectedAlbum}
              onUpdateAlbum={handleUpdateAlbum}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
