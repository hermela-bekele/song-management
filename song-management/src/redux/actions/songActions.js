export const FETCH_SONGS_REQUEST = 'FETCH_SONGS_REQUEST';
export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';
export const FETCH_SONGS_FAILURE = 'FETCH_SONGS_FAILURE';
export const ADD_SONG_REQUEST = 'ADD_SONG_REQUEST';
export const ADD_SONG_SUCCESS = 'ADD_SONG_SUCCESS';
export const ADD_SONG_FAILURE = 'ADD_SONG_FAILURE';
// Add more actions for UPDATE and DELETE
export const UPDATE_SONG_REQUEST = 'UPDATE_SONG_REQUEST';
export const UPDATE_SONG_SUCCESS = 'UPDATE_SONG_SUCCESS';
export const UPDATE_SONG_FAILURE = 'UPDATE_SONG_FAILURE';
export const DELETE_SONG_REQUEST = 'DELETE_SONG_REQUEST';
export const DELETE_SONG_SUCCESS = 'DELETE_SONG_SUCCESS';
export const DELETE_SONG_FAILURE = 'DELETE_SONG_FAILURE';

export const fetchSongsRequest = () => ({ type: FETCH_SONGS_REQUEST });
export const fetchSongsSuccess = (songs) => ({ type: FETCH_SONGS_SUCCESS, payload: songs });
export const fetchSongsFailure = (error) => ({ type: FETCH_SONGS_FAILURE, payload: error });

export const addSongRequest = (song) => ({ type: ADD_SONG_REQUEST, payload: song });
export const addSongSuccess = (song) => ({ type: ADD_SONG_SUCCESS, payload: song });
export const addSongFailure = (error) => ({ type: ADD_SONG_FAILURE, payload: error });

// Add more action creators for UPDATE and DELETE
export const updateSongRequest = (song) => ({ type: UPDATE_SONG_REQUEST, payload: song });
export const updateSongSuccess = (song) => ({ type: UPDATE_SONG_SUCCESS, payload: song });
export const updateSongFailure = (error) => ({ type: UPDATE_SONG_FAILURE, payload: error });

export const deleteSongRequest = (songId) => ({ type: DELETE_SONG_REQUEST, payload: songId });
export const deleteSongSuccess = (songId) => ({ type: DELETE_SONG_SUCCESS, payload: songId });
export const deleteSongFailure = (error) => ({ type: DELETE_SONG_FAILURE, payload: error });
