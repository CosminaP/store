import React from 'react';
import CartIcon from '../cart-icon/cart-icon.component';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { auth } from '../../firebase/firebase.utils';
// import { ReactComponent as Logo } from '../../assets/salad.svg';
import logo from '../../assets/logo.png';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      {/* <Logo className='logo' /> */}
      <img className="logo" src={logo} alt="logo"/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
        )}
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
