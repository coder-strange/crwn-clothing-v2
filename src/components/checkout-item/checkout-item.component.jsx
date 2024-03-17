import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  clearCartItem,
  removeCartItem,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeCartItem(cartItem));
  };

  const addItemHandler = () => {
    dispatch(addCartItem(cartItem));
  };

  const clearItemHandler = () => {
    dispatch(clearCartItem(cartItem));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
