import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as TMOAPI from '../lib/api/tmo';
import * as imagesAPI from '../lib/api/images';
import { takeLatest } from 'redux-saga/effects';

const [READ_TMO, READ_TMO_SUCCESS, READ_TMO_FAILURE] =
  createRequestActionTypes('tmo/READ_TMO');
const [READ_IMAGE, READ_IMAGE_SUCCESS, READ_IMAGE_FAILURE] =
  createRequestActionTypes('tmo/READ_IMAGE');

const UNLOAD_TMO = 'tmo/UNLOAD_TMO';
const INITIALIZE_IMAGE = 'tmo/INITIALIZE_IMAGE';

export const readTMO = createAction(READ_TMO, (placeId) => placeId);
export const readImage = createAction(READ_IMAGE, (title) => title);
export const unloadTMO = createAction(UNLOAD_TMO);
export const initializeImage = createAction(INITIALIZE_IMAGE, (form) => form);

const readTMOSaga = createRequestSaga(READ_TMO, TMOAPI.readTmo);
const readImageSaga = createRequestSaga(READ_IMAGE, imagesAPI.readImage);

export function* tmoSaga() {
  yield takeLatest(READ_TMO, readTMOSaga);
  yield takeLatest(READ_IMAGE, readImageSaga);
}

const initialState = {
  tmo: null,
  image: null,
  error: null,
};

const tmo = handleActions(
  {
    [INITIALIZE_IMAGE]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [READ_TMO_SUCCESS]: (state, { payload: tmo }) => ({
      ...state,
      tmo,
    }),
    [READ_TMO_FAILURE]: (state, { payload: error }) => ({
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
    [UNLOAD_TMO]: () => initialState,
  },
  initialState
);
export default tmo;
