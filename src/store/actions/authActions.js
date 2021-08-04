import firebase from "firebase";
import 'firebase/firestore';


export const signIn = (credentials) => {
    return (dispatch, getState) =>{

        firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'});
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR',err});
        });
    }
}

export const signOut = () =>{
    return (dispatch, getState) =>{
        firebase.auth().signOut().then(()=>{
            dispatch({type:"SIGNOUT_SUCCESS"});
        })
    }
}

export const signUp = (newUser) =>{
    return(dispatch, getState) => {
        const firestore = firebase.firestore;

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName : newUser.firstName,
                lastName:newUser.lastName,
                initials : newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({ type:'SIGNUP_ERROR',err })
        })
    }
}