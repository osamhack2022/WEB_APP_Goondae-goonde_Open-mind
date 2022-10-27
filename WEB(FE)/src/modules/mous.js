import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as mouAPI from '../lib/api/mou';
import * as imagesAPI from '../lib/api/images';
import { takeLatest } from 'redux-saga/effects';

const [LIST, LIST_SUCCESS, LIST_FAILURE] =
  createRequestActionTypes('mous/LIST');
const [IMAGES_LIST, IMAGES_LIST_SUCCESS, IMAGES_LIST_FAILURE] =
  createRequestActionTypes('mous/IMAGES_LIST');

export const list = createAction(LIST, (list) => list);
export const imagesList = createAction(IMAGES_LIST, (images) => images);

const listMOUSaga = createRequestSaga(LIST, mouAPI.mouList);
const imagesListSaga = createRequestSaga(IMAGES_LIST, imagesAPI.searchImages);

export function* mousSaga() {
  yield takeLatest(LIST, listMOUSaga);
  yield takeLatest(IMAGES_LIST, imagesListSaga);
}

const initialState = {
  mous: null,
  images: [],
  mousError: null,
  lastPage: 1,
};

const PAGE_PER_LOCATION = 3;

const mous = handleActions(
  {
    [LIST_SUCCESS]: (state, { payload: mous }) => ({
      ...state,
      mous: mous.results,
      lastPage: Math.ceil(mous.count / PAGE_PER_LOCATION),
      mousError: null,
    }),
    [LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      mousError: error,
    }),
    [IMAGES_LIST_SUCCESS]: (state, { payload: images }) => ({
      ...state,
      images,
      mousError: null,
    }),
    [IMAGES_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      mousError: error,
    }),
  },
  initialState
);

export default mous;
