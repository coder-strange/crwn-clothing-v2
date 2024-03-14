import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CarIcon } from '../../components/cart-icon/cart-icon.component';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext, CartProvider } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)
  const onSignOut = async() => {
    await signOutUser();
  }

  return (
    <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/'>
              HOME
            </Link>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            {
              currentUser ? 
              <span className="nav-link" onClick={onSignOut}>SIGN OUT</span> :
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
            }
            <CarIcon></CarIcon>
            
          </div>
          {
            isCartOpen ? <CartDropdown></CartDropdown> : <Fragment></Fragment>
          }
          
        </div>
        <Outlet />
    </Fragment>
  );
};

export default Navigation;
