import { createSelector } from "reselect";

export const selectCategoryReducer = (state) => state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (category) => category.categories
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (category) => category.isLoading
);

export const selectCategoryMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
