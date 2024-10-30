const initialState = {
    latestMovies: [],
    loading: false,
    error: null,
  };
  
  // Reducer for managing latest movies
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_LATEST_SUCCESS':
        return {
          ...state,
          latestMovies: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_LATEST_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  