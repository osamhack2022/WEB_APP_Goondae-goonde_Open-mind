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
const [LIKE_REVIEW, LIKE_REVIEW_SUCCESS, LIKE_REVIEW_FAILURE] =
  createRequestActionTypes('reviews/LIKE_REVIEW');

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
export const likeReview = createAction(
  LIKE_REVIEW,
  ({ placeId, reviewId }) => ({ placeId, reviewId })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
const listReviewsSaga = createRequestSaga(
  LIST,
  locationsAPI.getLocationReviews
);
const likeReviewSaga = createRequestSaga(
  LIKE_REVIEW,
  locationsAPI.addLikeLocationReview
);
const createReviewSaga = createRequestSaga(
  CREATE_REVIEW,
  locationsAPI.createLocationReview
);

export function* reviewsSaga() {
  yield takeLatest(LIST, listReviewsSaga);
  yield takeLatest(CREATE_REVIEW, createReviewSaga);
  yield takeLatest(LIKE_REVIEW, likeReviewSaga);
}

const initialState = {
  review: '',
  reviews: { count: 0, results: null },
  reviewsError: null,
};

const reviews = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, value } }) =>
      produce(state, (draft) => {
        draft[form] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [LIKE_REVIEW_SUCCESS]: (state, { payload: { reviewId, total_likes } }) => {
      const changedReviews = state.reviews.results.map((review) => {
        if (review.id === reviewId) {
          review.total_likes = total_likes;
        }
        return review;
      });
      return {
        ...state,
        reviews: { count: state.reviews.count, results: [...changedReviews] },
      };
    },
    [LIKE_REVIEW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      reviewsError: error,
    }),
    [CREATE_REVIEW_SUCCESS]: (state, { payload: review }) => ({
      ...state,
      review: '',
      reviews: {
        count: state.reviews.count + 1,
        results: state.reviews.results
          ? [{ ...review, total_likes: 0 }, ...state.reviews.results]
          : [{ ...review, total_likes: 0 }],
      },
      reviewsError: null,
    }),
    [CREATE_REVIEW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      reviewsError: error,
    }),
    [LIST_SUCCESS]: (state, { payload: reviews }) => ({
      ...state,
      reviews: {
        count: reviews.length,
        results: reviews,
      },
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
