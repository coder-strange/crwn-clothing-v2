import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";

export const CATEGORY_ACTION_TYPES = {
  FETCH_CATEGORIES: "category/FETCH_CATEGORIES",
  FETCH_CATEGORIES_SUCCESS: "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED: "category/FETCH_CATEGORIES_FAILED",
  SET_LOADING: "category/SET_LOADING",
};

export const fetchCategrories = () =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES);

export const fetchCategroriesSuccess = (categories) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategroriesFailed = (error) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const setLoading = () => createAction(CATEGORY_ACTION_TYPES.SET_LOADING);
