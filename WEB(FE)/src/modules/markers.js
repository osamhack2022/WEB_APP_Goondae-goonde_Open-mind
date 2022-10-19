import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as markersAPI from '../lib/api/markers';
import { takeLatest } from 'redux-saga/effects';

const [SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE] =
  createRequestActionTypes('markers/SEARCH');

export const search = createAction(SEARCH, (search) => search);

const searchMarkersSaga = createRequestSaga(
  SEARCH,
  markersAPI.markersSearchByRegion
);

export function* markersSaga() {
  yield takeLatest(SEARCH, searchMarkersSaga);
}

const initialState = {
  markers: null,
  markersError: null,
};

const markers = handleActions(
  {
    [SEARCH_SUCCESS]: (state, { payload: markers }) => ({
      ...state,
      markers: markers.results,
      markersError: null,
    }),
    [SEARCH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      markersError: error,
    }),
  },
  initialState
);

export default markers;
