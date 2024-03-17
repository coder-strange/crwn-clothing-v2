import { call, all, put, takeLatest } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategroriesFailed,
  fetchCategroriesSuccess,
  CATEGORY_ACTION_TYPES,
} from "./categories.action";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments);
    yield put(fetchCategroriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategroriesFailed(error));
  }
}

export function* onFetchCategory() {
  yield takeLatest(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategory)]);
}
