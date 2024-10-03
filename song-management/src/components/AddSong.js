import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSongRequest } from '../redux/actions/songActions';

const AddSong = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSong = { title, artist, audio: 'audio-file-url' }; 
    dispatch(addSongRequest(newSong));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input type="file" />
      <button type="submit">ADD SONG</button>
    </form>
  );
};

export default AddSong;
