import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] =
  createRequestActionTypes('post/READ_POST');
const UNLOAD_POST = 'post/UNLOAD_POST';
const [ADD_LIKE, ADD_LIKE_SUCCESS, ADD_LIKE_FAILURE] =
  createRequestActionTypes('post/ADD_LIKE');

export const addLike = createAction(ADD_LIKE, (id) => id);
export const readPost = createAction(READ_POST, (id) => id);
export const unloadPost = createAction(UNLOAD_POST);

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);
const addLikeSaga = createRequestSaga(ADD_LIKE, postsAPI.addLike);
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
  yield takeLatest(ADD_LIKE, addLikeSaga);
}

const initialState = {
  post: null,
  error: null,
};

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [ADD_LIKE_SUCCESS]: (state) => ({
      ...state,
    }),
    [ADD_LIKE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_POST]: () => initialState,
  },
  initialState
);

export default post;
