import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in and sign-up/sign-in and sign-up.compoenent';
import {auth, createUserProfileDocument } from './firebase/firebase.utils'
class App extends React.Component  {
  
  constructor() {
    super();

    this.state =  {
      currentUser : null
    }
  
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged( async userAuth =>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser : {
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        }, );

        console.log(this.state);
      
      }
      else
        this.setState({currentUser : userAuth})
      // console.log(user);
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {return (
    <div>
      <Header currentUser= {this.state.currentUser}/>
      <Switch>
      <Route exact path = '/' component = {Homepage} />
      <Route exact path = '/shop' component = {ShopPage} />
      <Route exact patht = '/signin' component= {SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
  }
}

export default App;
