import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {
  selectCategoryMap,
  selectIsLoading,
} from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoryMap);
  const isLoading = useSelector(selectIsLoading);
  return (
    <Fragment>
      {isLoading && <Spinner />}
      {!!categoriesMap ? (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      ) : (
        <h1>Loading Categories</h1>
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
