import React from 'react'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in and sign-up/sign-in and sign-up.compoenent';
import {auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
class App extends React.Component  {
  

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth =  auth.onAuthStateChanged( async userAuth =>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
        
              id:snapShot.id,
              ...snapShot.data()
             
          })
        }, );

        console.log(this.state);
      
      }
      else
        setCurrentUser(userAuth);
      // console.log(user);
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {return (
    <div>
      <Header />
      <Switch>
      <Route exact path = '/' component = {Homepage} />
      <Route exact path = '/shop' component = {ShopPage} />
      <Route exact patht = '/signin' render={()=>this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}></Route>
      </Switch>
    </div>
  );
  }
}

const mapStateToProps = ({user}) =>({
  cuurentUser : user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
})

export default  connect(mapStateToProps,mapDispatchToProps)(App);
