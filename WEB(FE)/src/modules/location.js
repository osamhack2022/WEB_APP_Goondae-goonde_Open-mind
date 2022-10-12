import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as locationsAPI from '../lib/api/locations';
import { takeLatest } from 'redux-saga/effects';

const [READ_LOCATION, READ_LOCATION_SUCCESS, READ_LOCATION_FAILURE] =
  createRequestActionTypes('location/READ_LOCATION');

const UNLOAD_LOCATION = 'location/UNLOAD_LOCATION';

export const readLocation = createAction(READ_LOCATION, (placeId) => placeId);
export const unloadLocation = createAction(UNLOAD_LOCATION);

const readLocationSaga = createRequestSaga(
  READ_LOCATION,
  locationsAPI.readLocation
);

export function* locationSaga() {
  yield takeLatest(READ_LOCATION, readLocationSaga);
}

const initialState = {
  location: null,
  error: null,
};

const location = handleActions(
  {
    [READ_LOCATION_SUCCESS]: (state, { payload: location }) => ({
      ...state,
      location,
    }),
    [READ_LOCATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_LOCATION]: () => initialState,
  },
  initialState
);
export default location;
