import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import locations, { locationsSaga } from './locations';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  locations,
  loading,
  user,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), locationsSaga()]);
}

export default rootReducer;
