import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsRequest } from '../redux/actions/songActions';
import SongRow from './songRow';
import { Table, TableRow, TableCell } from 'C:/Users/herme/song-management/song-management/src/components/StyledComponent';

const SongTable = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs.songs);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  return (
    <Table>
      <thead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Artist</TableCell>
          <TableCell>Audio</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </thead>
      <tbody>
        {songs.map(song => (
          <SongRow key={song.id} song={song} />
        ))}
      </tbody>
    </Table>
  );
};

export default SongTable;


