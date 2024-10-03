import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from 'C:/Users/herme/song-management/song-management/src/components/Header';
import SongTable from './components/songTable';
import AddSong from './components/AddSong';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddSong />
      <SongTable />
    </Provider>
  );
};

export default App;
