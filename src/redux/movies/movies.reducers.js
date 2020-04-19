import MoviesActionType from "./movies.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionType.FETCH_NOW_PLAYING_START:
      return {
        ...state,
        isFetching: true,
      };

    case MoviesActionType.FETCH_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case MoviesActionType.FETCH_NOW_PLAYING_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;