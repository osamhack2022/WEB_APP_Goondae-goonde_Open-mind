import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as locationsAPI from '../lib/api/locations';
import { takeLatest } from 'redux-saga/effects';
const CHANGE_FIELD = 'reviews/CHANGE_FIELD';
const INITIALIZE_FORM = 'reviews/INITIALIZE_FORM';

const [LIST, LIST_SUCCESS, LIST_FAILURE] =
  createRequestActionTypes('reviews/LIST');
const [CREATE_REVIEW, CREATE_REVIEW_SUCCESS, CREATE_REVIEW_FAILURE] =
  createRequestActionTypes('reviews/CREATE_REVIEW');
export const list = createAction(LIST, (list) => list);
export const changeField = createAction(CHANGE_FIELD, ({ form, value }) => ({
  form,
  value,
}));
export const createReview = createAction(
  CREATE_REVIEW,
  ({ author, title, content, location_id }) => ({
    author,
    title,
    content,
    location_id,
  })
);
const listReviewsSaga = createRequestSaga(
  LIST,
  locationsAPI.getLocationReviews
);

const createReviewSaga = createRequestSaga(
  CREATE_REVIEW,
  locationsAPI.createLocationReview
);

export function* reviewsSaga() {
  yield takeLatest(LIST, listReviewsSaga);
  yield takeLatest(CREATE_REVIEW, createReviewSaga);
}

const initialState = {
  review: '',
  reviews: null,
  reviewsError: null,
};

const reviews = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, value } }) =>
      produce(state, (draft) => {
        draft[form] = value;
      }),
    [INITIALIZE_FORM]: (state) => initialState,
    [CREATE_REVIEW_SUCCESS]: (state, { payload: review }) => ({
      ...state,
      review,
    }),
    [CREATE_REVIEW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      reviewsError: error,
    }),
    [LIST_SUCCESS]: (state, { payload: reviews }) => ({
      ...state,
      reviews,
      reviewsError: null,
    }),
    [LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      reviewsError: error,
    }),
  },
  initialState
);

export default reviews;
