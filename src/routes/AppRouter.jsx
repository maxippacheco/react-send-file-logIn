import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import {firebase} from '../database/firebase-config';
import { HomeScreen } from '../components/home/HomeScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { UserProfile } from '../components/profile/UserProfile';
import { startLoadingPublicKey } from '../actions/public_key';
import { LoadingScreen } from '../components/loader/LoadingScreen';



export const AppRouter = () => {
   
    const [ userLoggedIn, setUserLoggedIn] = useState(false);
    const [checking, setChecking] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
       

        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                
                dispatch(login(user.email, user.displayName, user.uid))
                dispatch(startLoadingPublicKey());

                setUserLoggedIn(true);

                setChecking(false)

            }else{
                setUserLoggedIn(false);
            }

            setChecking(false)
        })

 
    }, [dispatch, setUserLoggedIn, setChecking, checking])
  
    if (checking) {
        return <LoadingScreen /> 
    }    


    return (
            <Router>
                <div>
                    <Switch>
                        <PublicRoute
                            path='/auth'
                            component={AuthRouter}
                            isAuthenticated={userLoggedIn}
                        />

                        <PrivateRoute 
                            exact path='/home'
                            component={HomeScreen}
                            isAuthenticated={userLoggedIn}
                        />

                        <PrivateRoute 
                            exact path='/user'
                            component={UserProfile}
                            isAuthenticated={userLoggedIn}
                        />

                        <Redirect to='/home' />
                    </Switch>
                </div>        
            </Router>        
    )
}
