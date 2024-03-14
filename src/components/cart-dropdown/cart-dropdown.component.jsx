import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { Link } from 'react-router-dom';

export const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className="cart-dropdown-container">
            <div className="cart-item">
                {
                    cartItems.map(item => {
                        return <CartItem key={item.id} cartItem={item}></CartItem>
                    })
                }
            </div>
            <Link className="inverted" to="/checkout">GO TO CHECKOUT</Link>
        </div>
    )
}