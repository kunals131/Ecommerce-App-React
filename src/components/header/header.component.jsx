import React from 'react'
import {Link} from 'react-router-dom'

import './header.styles.scss'

import { ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss'

import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.components'
import CartDropdown from '../cartDropdown/cart-dropdown.component'

const Header = ({ currentUser })=>(
    <div className="header">
        <Link to="/" className='logo-container'>
        <Logo className = "Logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className = "option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link to='/signin' className="option">SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        <CartDropdown/>
    </div>
);

const mapStateToProps = (state) => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);