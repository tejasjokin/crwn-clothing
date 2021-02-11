import React,{ Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage.js';
import Shop from './pages/Shop/Shop.js';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp.js';
import Header from './components/Header/Header.js';

import { auth } from './firebase/firebase.utils';

class App extends Component{
constructor(){
    super();
    this.state = {
        currentUser: null
    }
}

    unsubscribeFromAuth = null

    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});

            console.log(user);
        })
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render(){
         return (
            <div className="App">
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/signin" component={SignInSignUp}/>
                </Switch>
            </div>
        );
    }
}

export default App;
