import "./shop.styles.scss";
import Category from "../category/category.component";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { useDispatch } from "react-redux";
import { fetchCategrories } from "../../store/categories/categories.action";
import { useMemo } from "react";

export const Shop = () => {
  const dispatch = useDispatch();
  useMemo(() => {
    dispatch(fetchCategrories());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
