import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import ShopPage from './components/pages/shop/shop';
import HomePage from './components/pages/homepage/homepage';
import MenuItem from './components/menu-item/menu-item';
import Directory from './components/directory/directory';
import Header from './components/header/header';
import SingInAndSingUp from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/menu' component={Directory} />
          <Route path='/signin' component={SingInAndSingUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
