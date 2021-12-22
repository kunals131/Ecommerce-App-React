import React from 'react';
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

class App extends React.Component  {
  
  constructor() {
    super();
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, (user)=>{
      if (user) {
        this.props.setCurrentUser(user);
      }
      else {
        this.props.setCurrentUser(null)
      }
    })

  }
  render() {
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
              this.props.currentUser ? (
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
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});


export default connect(
  mapStateToProps,{
    setCurrentUser
  }
)(App);