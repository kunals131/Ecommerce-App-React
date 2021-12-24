import React, {useState} from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cartDropdown/cart-dropdown.component";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from "./header.styles";
const Header = ({ currentUser, hidden }) => {

  const [cart, setCart] =useState(false);

  const handleSetCart = ()=>{
    setCart((prevState)=>{
      setCart(!prevState);
    })
  }

return (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="Logo"></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink className="option" to="/shop">
        SHOP
      </OptionLink>
      <OptionLink className="option" to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as='div' className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin" className="option">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon handleSetCart={handleSetCart} />
    </OptionsContainer>
    {
      (cart)?<CartDropdown  handleSetCart={handleSetCart}/>:null
    }
  </HeaderContainer>
);
  }

const mapStateToProps = (state)=>{
  return {
    currentUser : state.user.currentUser,

  }
}

export default connect(mapStateToProps)(Header);
