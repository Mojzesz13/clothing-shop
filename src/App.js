import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './components/pages/homepage/shop/shop';
import HomePage from './components/pages/homepage/homepage';
import MenuItem from './components/menu-item/menu-item';
import Directory from './components/directory/directory';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/menu' component={Directory} />
      </Switch>
    </div>
  );
}

export default App;
