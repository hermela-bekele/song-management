import {
    FETCH_SONGS_SUCCESS,
    FETCH_SONGS_FAILURE,
    ADD_SONG_SUCCESS,
    ADD_SONG_FAILURE,
    UPDATE_SONG_SUCCESS,
    UPDATE_SONG_FAILURE,
    DELETE_SONG_SUCCESS,
    DELETE_SONG_FAILURE,
    
  } from '../actions/songActions';
  
  const initialState = {
    songs: [],
    error: null,
  };
  
  const songReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SONGS_SUCCESS:
        return { ...state, songs: action.payload };
      case FETCH_SONGS_FAILURE:
        return { ...state, error: action.payload };
      case ADD_SONG_SUCCESS:
        return { ...state, songs: [...state.songs, action.payload] };
      case ADD_SONG_FAILURE:
        return { ...state, error: action.payload };
      

      case UPDATE_SONG_SUCCESS:
        return {
          ...state,
          songs: state.songs.map(song =>
            song.id === action.payload.id ? action.payload : song
          ),
        };
      case UPDATE_SONG_FAILURE:
        return { ...state, error: action.payload };
      case DELETE_SONG_SUCCESS:
        return {
          ...state,
          songs: state.songs.filter(song => song.id !== action.payload),
        };
      case DELETE_SONG_FAILURE:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default songReducer;
  