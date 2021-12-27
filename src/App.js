import React, {useEffect, lazy, Suspense} from 'react';
import { Switch, Route, Redirect, } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/header/header.component';
import { auth, fetchCartItemsFromUser } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { fillCart, emptyCart } from './redux/cart/cart.action';
import { onAuthStateChanged } from 'firebase/auth';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { selectNotification } from './redux/notificationMessage/notification.selector';

import { setNotification } from './redux/notificationMessage/notification.action';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/ErrorBoundary.component';
//Homepage is the main page so its not gonna matter that much
const HomePage = lazy(()=>import('./pages/homepage/homepage.component'))
const ShopPage = lazy(()=>import('./pages/shop/shop.component'))
const SignInAndSignUpPage = lazy(()=>import('./pages/sign-in and sign-up/sign-in and sign-up.compoenent')) 
const Checkout = lazy(()=>import('./pages/checkout/Checkout.component'))

const App = (props)=>{

  useEffect(()=>{
    if (props.notification.message) {
      setTimeout(()=>{
        props.setNotification('');
      }, 3000)
    } // eslint-disable-next-line
  }, [props.notification])

  
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if (user) {
        props.setCurrentUser(user);
        props.setNotification('Logged In');
        console.log(auth);
        const fetchAndAddCart = async()=>{
          const cartItems = await fetchCartItemsFromUser(user.uid);
          props.fillCart(cartItems);
        }
        fetchAndAddCart();
      }
      else {
        props.setCurrentUser(null)
        props.emptyCart();
      }
    })
    //eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
    return (

      <div>
        {
          props.notification.message&&<div>{props.notification.message}</div>
        }
        <Header />
        <Switch>
          <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
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
          </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  notification : selectNotification
})


export default connect(
  mapStateToProps,{
    setCurrentUser,
    setNotification,
    fillCart,
    emptyCart
  }
)(App);