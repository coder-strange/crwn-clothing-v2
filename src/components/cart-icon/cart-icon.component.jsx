import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { toggleCartOpen } from "../../store/cart/cart.action";

export const CarIcon = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const toggleDrowndown = () => {
    dispatch(toggleCartOpen());
  };
  return (
    <div className="cart-icon-container" onClick={toggleDrowndown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItems ? cartItems.length : 0}</span>
    </div>
  );
};
