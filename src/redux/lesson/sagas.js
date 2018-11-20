import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';

export function* fetchLesson(action) {
  const lessonsUrl = `http://5bf3b60191c25b0013a3b914.mockapi.io/lesson`;
  yield put(actions.fetchLessonStarted());

  try {
    const response = yield call(axios.get, lessonsUrl);
    yield put(actions.fetchLessonSucceeded(response.data));
  } catch (e) {
    yield put(actions.fetchLessonFailed(e.message));
  }
}

export function* fetchLessonSaga() {
  yield takeEvery(actions.FETCH_LESSON_REQUESTED, fetchLesson);
}
