import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in and sign-up/sign-in and sign-up.compoenent';
import { onAuthStateChanged } from 'firebase/auth';
import { Redirect } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
class App extends React.Component  {
  
  constructor() {
    super();

    this.state =  {
      currentUser : null,
      isSignedin : false,
    }
  
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, (user)=>{
      if (user) {
        this.setState({isSignedin : true, currentUser : user});
      }
      else {
        this.setState({isSignedin : false, currentUser : null});
      }
    })

  }

  render() {return (
    <div>
      <Header currentUser= {this.state.isSignedin}/>
      <Switch>
      <Route exact path = '/' >{this.state.isSignedin?<Homepage/>:<Redirect to="/signin"/>}</Route>
      <Route exact path = '/shop' >{this.state.isSignedin?<ShopPage/>:<Redirect to="/signin"/>}</Route>
      <Route exact patht = '/signin' >{!this.state.isSignedin?<SignInAndSignUpPage/>:<Redirect to="/"/>}</Route>
      </Switch>
    </div>
  );
  }
}

export default App;
