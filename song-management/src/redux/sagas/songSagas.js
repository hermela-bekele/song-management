import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
    FETCH_SONGS_REQUEST,
    fetchSongsSuccess,
    fetchSongsFailure,
    ADD_SONG_REQUEST,
    addSongSuccess,
    addSongFailure,
    UPDATE_SONG_REQUEST,
    updateSongSuccess,
    updateSongFailure,
    DELETE_SONG_REQUEST,
    deleteSongSuccess,
    deleteSongFailure,
  
} from '../actions/songActions';

function* fetchSongs() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts'); // Replace with your API
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* addSong(action) {
  try {
    const response = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts', action.payload); // Replace with your API
    yield put(addSongSuccess(response.data));
  } catch (error) {
    yield put(addSongFailure(error.message));
  }
}

function* updateSong(action) {
    try {
      const response = yield call(axios.put, `https://jsonplaceholder.typicode.com/posts/${action.payload.id}`, action.payload); // Replace with your API
      yield put(updateSongSuccess(response.data));
    } catch (error) {
      yield put(updateSongFailure(error.message));
    }
  }
  
  function* deleteSong(action) {
    try {
      yield call(axios.delete, `https://jsonplaceholder.typicode.com/posts/${action.payload}`); // Replace with your API
      yield put(deleteSongSuccess(action.payload));
    } catch (error) {
      yield put(deleteSongFailure(error.message));
    }
  }



export default function* songSagas() {
  yield takeEvery(FETCH_SONGS_REQUEST, fetchSongs);
  yield takeEvery(ADD_SONG_REQUEST, addSong);
  yield takeEvery(UPDATE_SONG_REQUEST, updateSong);
  yield takeEvery(DELETE_SONG_REQUEST, deleteSong);
  
}
