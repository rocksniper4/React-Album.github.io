// App.js
import React, { useState } from 'react';
import './style.css';
import AlbumList from './components/AlbumList';
import AddAlbumForm from './components/AddAlbumForm';
import UpdateAlbumForm from './components/UpdateAlbumForm';
import { deleteAlbum } from './services/albumService';

const App = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albums, setAlbums] = useState([]);

  const handleAddAlbum = (newAlbum) => {
    setAlbums([...albums, newAlbum]);
  };

  const handleUpdateAlbum = (updatedAlbum) => {
    setAlbums((prevAlbums) =>
      prevAlbums.map((album) => (album.id === updatedAlbum.id ? updatedAlbum : album))
    );
    setSelectedAlbum(null);
  };

  const handleDeleteAlbum = async (id) => {
    await deleteAlbum(id);
    setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== id));
  };

  return (
    <div>
      <AlbumList albums={albums} onDeleteAlbum={handleDeleteAlbum} onUpdateAlbum={setSelectedAlbum} />
      {/* <AddAlbumForm onAddAlbum={handleAddAlbum} />
      {selectedAlbum && (
        <UpdateAlbumForm
          album={selectedAlbum}
          onUpdateAlbum={handleUpdateAlbum}
        />
      )} */}
    </div>
  );
};

export default App;
