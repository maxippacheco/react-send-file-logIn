import { types } from "../types/types";
import { firebase } from '../database/firebase-config';

export const startLogin = (email, password) => {
    return (dispatch) => {
       
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) =>{
                dispatch(login(user.email, user.displayName, user.uid));
            })
            .catch(err => console.log(err));

    }    
}



export const startRegisterWithEmailAndPassword = (email, password, name) => {
    
    return (dispatch) => {
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async({user}) => {

            await user.updateProfile({displayName: name});

            dispatch(login( user.email, user.displayName, user.uid ));
        })
        .catch(error => {
            console.log(error);
            // Swal.fire('Error', error.message, 'error');
        })
    }

}

export const startLogout= () => {
    return async(dispatch) => {

        await firebase.auth().signOut()
        dispatch(logout())
    }
}


export const login = (email, displayName, uid) => ({
    type: types.login,
    payload: {
        email,
        displayName,
        uid
    }
})

const logout = () => ({
    type: types.logout
})