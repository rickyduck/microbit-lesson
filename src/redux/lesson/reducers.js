import {
  FETCH_LESSON_STARTED,
  FETCH_LESSON_SUCCEEDED,
  FETCH_LESSON_FAILED
} from './actions';

const defaultState = {
  lesson: null,
  fetching: false,
  filters: null,
  error: false
};

const githubReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_LESSON_STARTED:
      return {
        ...state,
        fetching: true,
        error: false
      };
    case FETCH_LESSON_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        lesson: action.data.response[0],
        error: false
      };
    case FETCH_LESSON_FAILED:
      return {
        ...state,
        fetching: false,
        lesson: null,
        error: action.data.error
      };
    default:
      return state;
  }
};

export default githubReducer;
