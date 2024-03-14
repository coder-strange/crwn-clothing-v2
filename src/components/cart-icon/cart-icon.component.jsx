import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';

export const CarIcon = () => {
    const { isCartOpen, setCartOpen, cartItems } = useContext(CartContext)
    const toggleDrowndown = () => {
        setCartOpen(!isCartOpen)
    }
    return (
        <div className="cart-icon-container" onClick={toggleDrowndown}>
            <ShoppingIcon className="shopping-icon"  />
            <span className="item-count">{cartItems.length}</span>
        </div>
    )
}