import React, { useState } from 'react';

const EditSongModal = ({ song, isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [audio, setAudio] = useState(null);

  const handleSave = () => {
    const updatedSong = { ...song, title, artist, audio };
    onSave(updatedSong);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Song</h2>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Artist:
          <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
        </label>
        <label>
          Audio:
          <input type="file" onChange={(e) => setAudio(e.target.files[0])} />
        </label>
        <button onClick={handleSave}>SAVE SONG</button>
        <button onClick={onClose}>CANCEL</button>
      </div>
    </div>
  );
};

export default EditSongModal;
