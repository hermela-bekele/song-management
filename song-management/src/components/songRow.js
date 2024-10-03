import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateSongRequest, deleteSongRequest } from 'C:/Users/herme/song-management/song-management/src/redux/actions/songActions';
import EditSongModal from 'C:/Users/herme/song-management/song-management/src/components/EditSongModel';
import { TableRow, TableCell, Button, Audio } from 'C:/Users/herme/song-management/song-management/src/components/StyledComponent';

const SongRow = ({ song }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const audioRef = useRef(null);

  const handleUpdate = (updatedSong) => {
    dispatch(updateSongRequest(updatedSong));
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteSongRequest(song.id));
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <TableRow>
        <TableCell>{song.id}</TableCell>
        <TableCell>{song.title}</TableCell>
        <TableCell>{song.artist}</TableCell>
        <TableCell>{song.audio}</TableCell>
        <TableCell>
          <Button onClick={handlePlay}>PLAY</Button>
          <Button onClick={() => setIsModalOpen(true)}>UPDATE</Button>
          <Button onClick={handleDelete}>DELETE</Button>
        </TableCell>
      </TableRow>
      <EditSongModal
        song={song}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleUpdate}
      />
      <Audio ref={audioRef} src={song.audio} />
    </>
  );
};

export default SongRow;




