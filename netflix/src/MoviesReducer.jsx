export const actionTypes = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETC_ERROR: "FETC_ERROR",
};

export const initialState = {
  loading: false,
  movies: [],
  error: false,
};

export const MoviesReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        loading: true,
        movies: [],
        error: false,
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.movies,
      };
    case actionTypes.FETCH_ERROR:
      return {
        loading: false,
        movies: [],
        error: true,
      };
    default:
      return state;
  }
};
