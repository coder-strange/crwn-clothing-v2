import "./product-card.styles.scss";

import Button from "../button/button.component";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addCartItem(product));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCartHandler}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
