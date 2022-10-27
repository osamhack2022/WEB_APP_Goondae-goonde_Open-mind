import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as tmoAPI from '../lib/api/tmo';
import * as imagesAPI from '../lib/api/images';
import { takeLatest } from 'redux-saga/effects';

const [LIST, LIST_SUCCESS, LIST_FAILURE] =
  createRequestActionTypes('tmos/LIST');

const [IMAGES_LIST, IMAGES_LIST_SUCCESS, IMAGES_LIST_FAILURE] =
  createRequestActionTypes('tmos/IMAGES_LIST');

export const list = createAction(LIST, (list) => list);
export const imagesList = createAction(IMAGES_LIST, (images) => images);

const listTmoSaga = createRequestSaga(LIST, tmoAPI.tmoList);
const imagesListSaga = createRequestSaga(IMAGES_LIST, imagesAPI.searchImages);

export function* tmosSaga() {
  yield takeLatest(LIST, listTmoSaga);
  yield takeLatest(IMAGES_LIST, imagesListSaga);
}
const initialState = {
  tmos: null,
  images: [],
  tmosError: null,
  lastPage: 1,
};
const PAGE_PER_LOCATION = 3;
const tmos = handleActions(
  {
    [LIST_SUCCESS]: (state, { payload: tmos }) => ({
      ...state,
      tmos: tmos.results,
      lastPage: Math.ceil(tmos.count / PAGE_PER_LOCATION),
      locationsError: null,
    }),
    [LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      locationsError: error,
    }),
    [IMAGES_LIST_SUCCESS]: (state, { payload: images }) => ({
      ...state,
      images,
      locationsError: null,
    }),
    [IMAGES_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      locationsError: error,
    }),
  },
  initialState
);

export default tmos;
