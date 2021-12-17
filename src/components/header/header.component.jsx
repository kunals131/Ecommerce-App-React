import React from 'react'
import {Link} from 'react-router-dom'

import './header.styles.scss'

import { ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss'

import {logoutUser} from '../../firebase/firebase.utils'

 

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
                <div className = "option" onClick={()=>logoutUser()}>SIGN OUT</div>
                :
                <Link to='/signin' className="option">SIGN IN</Link>
            }

        </div>
    </div>
);

export default Header