export const FETCH_LESSON_REQUESTED = 'FETCH_LESSON_REQUESTED';
export const FETCH_LESSON_STARTED = 'FETCH_LESSON_STARTED';
export const FETCH_LESSON_SUCCEEDED = 'FETCH_LESSON_SUCCEEDED';
export const FETCH_LESSON_FAILED = 'FETCH_LESSON_FAILED';

export const fetchLessonRequested = () => ({
  type: FETCH_LESSON_REQUESTED
});

export const fetchLessonStarted = () => ({
  type: FETCH_LESSON_STARTED
});

export const fetchLessonSucceeded = response => ({
  type: FETCH_LESSON_SUCCEEDED,
  data: {
    response
  }
});

export const fetchLessonFailed = error => ({
  type: FETCH_LESSON_FAILED,
  data: {
    error
  }
});
