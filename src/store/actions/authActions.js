export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
          dispatch({ type: 'LOGIN_SUCCESSS' });    
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err});
        });

    }

} 

export const signOut  = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'});
        });
        
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                phone: newUser.phone,
                age: newUser.age,
                date: newUser.date,
                gender: newUser.gender
            
            }).then(() => {
                dispatch({ type: 'SIGNUP SUCCESS'})
            }).catch((err) => {
                dispatch({ type: 'SIGNUP ERROR', err});
            });
    
        })
    }
}