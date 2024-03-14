import { createContext, useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const CartContext = createContext({
    showDropdown: false,
    cartItems: [],
    cartTotal: 0
});

export const CartProvider = ({children}) => {
    const [ isCartOpen, setCartOpen ] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    let location = useLocation()

    useEffect(()=> {
        setCartTotal(
            cartItems.reduce((prev, curr) => { 
                return prev + (curr.price * curr.quantity)
            }, 0)
        )
    }, [cartItems])


    useEffect(() => {
        setCartOpen(false)
    }, [location])

    const updateCartItem = (item) => {
        const alreadyExistIndex = cartItems.findIndex((cartItem) => cartItem.id == item.id);
        const updateCart = [...cartItems];

        if(alreadyExistIndex > -1) {
            updateCart[alreadyExistIndex] = {
                ...item,
                quantity: ++updateCart[alreadyExistIndex].quantity
            }
        }
        else {
            updateCart.push({
                ...item,
                quantity: 1
            })

        }
        setCartItems(updateCart);

    }

    const removeCartItem = (item) => {
       
        const alreadyExistIndex = cartItems.findIndex((cartItem) => cartItem.id == item.id);
        const updateCart = [...cartItems];

        if(alreadyExistIndex > -1 && updateCart[alreadyExistIndex].quantity > 1) {
            updateCart[alreadyExistIndex] = {
                ...item,
                quantity: --updateCart[alreadyExistIndex].quantity
            }
            setCartItems(updateCart);
        }
        else if(alreadyExistIndex > -1) {

            clearCartItem(item)

        }
    }

    const clearCartItem = (item) => {
        const updatedItems = cartItems.filter(carItem => item.id != carItem.id);
        setCartItems(updatedItems);
    }

    const value = { isCartOpen, setCartOpen, cartItems, updateCartItem, removeCartItem, clearCartItem, cartTotal};


    return (
        <CartContext.Provider value={ value }> 
            { children } 
        </CartContext.Provider>
    )
}