import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signInandSignUp/signInandSignUp.component';
import { auth, createUserProfileDoc } from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions';
import { connect } from 'react-redux';
import {Redirect } from 'react-router-dom'
import { selectCurrentUser} from './redux/user/user.selectors';
import { createStructuredSelector} from 'reselect';

class App extends React.Component {
   

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            let {setCurrentUser} = this.props;
            if (userAuth) {
                const userRef = await createUserProfileDoc(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    },() => console.log(userAuth))
                })
            } else {
                setCurrentUser(userAuth)
            }

        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
             <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          {/*<Route exact path='/checkout' component={CheckoutPage} />*/}
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
        )
    }
}


const mapStateToProps = createStructuredSelector({
currentUser : selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);