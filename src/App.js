import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import {auth} from './firebase'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import Payment from './Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise  = loadStripe('pk_test_51JFzDmSDBmD6hSj9MkIEVZlRUWvo5b9urwfvLeTuHNSGWscJqGShDH8YUqAUpLtF1Kz6ZnGb56eMTlkQvjuukW1F00yRCxvBo3');

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  },[])

  return (
    <Router>  
      <div className="App">
        <Switch>  
          <Route path='/checkout' exact>
            <Header />
            <Checkout />
          </Route>
          <Route path="/login" exact component={Login} />
          <Route path="/payment" exact>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
