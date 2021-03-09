import React,{ Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage.js';
import Shop from './pages/Shop/Shop.js';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp.js';
import Header from './components/Header/Header.js';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component{
constructor(){
    super();
    this.state = {
        currentUser: null
    }
}

    unsubscribeFromAuth = null

    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            const userRef = await createUserProfileDocument(userAuth);

            if(userAuth)
            {
                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    }, () => {
                        console.log(this.state);
                    });
                });
            }
            else
            {
                this.setState({currentUser: userAuth}, () => {
                    console.log(this.state);
                })
            }
        });
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
