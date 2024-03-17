import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

export const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-item">
        {cartItems &&
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item}></CartItem>;
          })}
      </div>
      <Link className="button-container inverted" to="/checkout">
        GO TO CHECKOUT
      </Link>
    </div>
  );
};
