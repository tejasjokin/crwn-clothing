import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage.js';
import Shop from './pages/Shop/Shop.js';

function App() {
  return (
    <div className="App">
    	<Switch>
    		<Route exact path="/" component={HomePage} />
    		<Route exact path="/shop" component={Shop}/>
    	</Switch>
    </div>
  );
}

export default App;
