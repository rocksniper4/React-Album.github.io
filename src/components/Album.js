// Album.js
import React from 'react';

const Album = ({ album, onDeleteAlbum, onUpdateAlbum }) => {
  return (
    <div>
      <h3>{album.title}</h3>
      <button onClick={() => onDeleteAlbum(album.id)} className="ui-btn">Delete</button>
      <button onClick={() => onUpdateAlbum(album)} className='edit-btn'>Edit</button>
    </div>
  );
};

export default Album;
