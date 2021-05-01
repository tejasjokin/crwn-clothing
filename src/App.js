import React,{ Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage.js';
import Shop from './pages/Shop/Shop.js';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp.js';
import Checkout from './pages/Checkout/Checkout.js';

import Header from './components/Header/Header.js';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions.js';
import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from './redux/user/user.selectors.js';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component{

    unsubscribeFromAuth = null

    componentDidMount(){
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            const userRef = await createUserProfileDocument(userAuth);

            if(userAuth)
            {
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data()
                        });
                });
            }
            else
            {
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render(){
        const {currentUser} = this.props;
         return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={Shop}/>
                    <Route exact path="/checkout" component={Checkout} />
                    <Route 
                    exact path="/signin" 
                    render={
                        () => currentUser?(<Redirect to="/"/>):(<SignInSignUp/>)
                    }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
