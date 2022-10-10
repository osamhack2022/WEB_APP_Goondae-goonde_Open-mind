import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as locationsAPI from '../lib/api/locations';
import { takeLatest } from 'redux-saga/effects';

const [LIST, LIST_SUCCESS, LIST_FAILURE] =
  createRequestActionTypes('locations/LIST');

export const list = createAction(LIST, (list) => list);

const listLocationsSaga = createRequestSaga(LIST, locationsAPI.locationsList);

export function* locationsSaga() {
  yield takeLatest(LIST, listLocationsSaga);
}

const initialState = {
  locations: null,
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
  },
  initialState
);

export default locations;
