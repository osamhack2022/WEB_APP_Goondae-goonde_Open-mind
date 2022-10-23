import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as locationsAPI from '../lib/api/locations';
import * as imagesAPI from '../lib/api/images';
import { takeLatest } from 'redux-saga/effects';

const [LIST, LIST_SUCCESS, LIST_FAILURE] =
  createRequestActionTypes('locations/LIST');
const [IMAGES_LIST, IMAGES_LIST_SUCCESS, IMAGES_LIST_FAILURE] =
  createRequestActionTypes('locations/IMAGES_LIST');

export const list = createAction(LIST, (list) => list);
export const imagesList = createAction(IMAGES_LIST, (images) => images);

const listLocationsSaga = createRequestSaga(LIST, locationsAPI.locationsList);
const imagesListSaga = createRequestSaga(IMAGES_LIST, imagesAPI.searchImages);

export function* locationsSaga() {
  yield takeLatest(LIST, listLocationsSaga);
  yield takeLatest(IMAGES_LIST, imagesListSaga);
}

const initialState = {
  locations: null,
  images: [],
  locationsError: null,
  lastPage: 1,
};

const PAGE_PER_LOCATION = 3;

const locations = handleActions(
  {
    [LIST_SUCCESS]: (state, { payload: locations }) => ({
      ...state,
      locations: locations.results,
      lastPage: Math.ceil(locations.count / PAGE_PER_LOCATION),
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

export default locations;
