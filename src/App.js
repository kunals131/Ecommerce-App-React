import React, {useEffect} from 'react';
import { Switch, Route, Redirect, } from 'react-router-dom';
import { connect } from 'react-redux';
import Checkout from './pages/checkout/Checkout.component';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in and sign-up/sign-in and sign-up.compoenent';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { onAuthStateChanged } from 'firebase/auth';

const App = (props)=>{


  let unsubscribeFromAuth = null

  useEffect(()=>{
    unsubscribeFromAuth = onAuthStateChanged(auth, (user)=>{
      if (user) {
        props.setCurrentUser(user);
      }
      else {
        props.setCurrentUser(null)
      }
    })
}, [])
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact
            path='/signin'
            render={() =>
              props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});


export default connect(
  mapStateToProps,{
    setCurrentUser
  }
)(App);