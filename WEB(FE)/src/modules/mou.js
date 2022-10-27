import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as mouAPI from '../lib/api/mou';
import * as imagesAPI from '../lib/api/images';
import { takeLatest } from 'redux-saga/effects';

const [READ_MOU, READ_MOU_SUCCESS, READ_MOU_FAILURE] =
  createRequestActionTypes('mou/READ_MOU');

const [READ_IMAGE, READ_IMAGE_SUCCESS, READ_IMAGE_FAILURE] =
  createRequestActionTypes('mou/READ_IMAGE');
const [LIKE_MOU, LIKE_MOU_SUCCESS, LIKE_MOU_FAILURE] =
  createRequestActionTypes('mou/LIKE_MOU');

const UNLOAD_MOU = 'mou/UNLOAD_MOU';
const INITIALIZE_IMAGE = 'mou/INITIALIZE_IMAGE';

export const readMOU = createAction(READ_MOU, (placeId) => placeId);
export const readImage = createAction(READ_IMAGE, (title) => title);
export const likeMOU = createAction(LIKE_MOU, (placeId) => placeId);
export const unloadLocation = createAction(UNLOAD_MOU);
export const initializeImage = createAction(INITIALIZE_IMAGE, (form) => form);

const readMOUSaga = createRequestSaga(READ_MOU, mouAPI.readMOU);

const readImageSaga = createRequestSaga(READ_IMAGE, imagesAPI.readImage);
const likeMOUSaga = createRequestSaga(LIKE_MOU, mouAPI.likeMOU);

export function* mouSaga() {
  yield takeLatest(READ_MOU, readMOUSaga);
  yield takeLatest(LIKE_MOU, likeMOUSaga);
  yield takeLatest(READ_IMAGE, readImageSaga);
}

const initialState = {
  mou: null,
  image: null,
  error: null,
};

const mou = handleActions(
  {
    [INITIALIZE_IMAGE]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [READ_MOU_SUCCESS]: (state, { payload: mou }) => ({
      ...state,
      mou,
    }),
    [READ_MOU_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIKE_MOU_SUCCESS]: (state) => {
      const bool = state.mou.user_liked;
      const mou = state.mou;
      if (bool) {
        mou.total_likes++;
      } else {
        mou.total_likes--;
      }

      return { ...state, mou };
    },
    [LIKE_MOU_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [READ_IMAGE_SUCCESS]: (state, { payload: image }) => ({
      ...state,
      image,
    }),
    [READ_IMAGE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_MOU]: () => initialState,
  },
  initialState
);
export default mou;
