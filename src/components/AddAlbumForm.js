// AddAlbumForm.js
import React, { useState } from 'react';
import { addAlbum } from '../services/albumService';

const AddAlbumForm = ({ onAddAlbum }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newAlbum = await addAlbum({ title });
      onAddAlbum(newAlbum);
      setTitle('');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='add-album-main'>
      <h2 className='heading2'>Add Album</h2>
      <form className='add-album' onSubmit={handleSubmit}>
        <label>
          Add Your Title Here:
          <input className='add-album-input' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        {/* <button className='add' type="submit">Add</button> */}
        <button type="submit" className="button">
          <span className="button__text">Add Title</span>
          <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
        </button>
      </form>
    </div>
  );
};

export default AddAlbumForm;
