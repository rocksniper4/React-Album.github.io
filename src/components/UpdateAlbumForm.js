// UpdateAlbumForm.js
import React, { useState, useEffect } from 'react';
import { updateAlbum } from '../services/albumService';

const UpdateAlbumForm = ({ album, onUpdateAlbum }) => {
  const [title, setTitle] = useState(album.title);

  useEffect(() => {
    setTitle(album.title);
  }, [album]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedAlbum = await updateAlbum(album.id, { title });
      onUpdateAlbum(updatedAlbum);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2 className='heading3'>Update Album</h2>
      <form onSubmit={handleSubmit}>
        <label className='label-title'>
          Edit Your Title Here:
          <input className='input-edit' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <button type="submit" className='up-btn'>Update</button>
      </form>
    </div>
  );
};

export default UpdateAlbumForm;
