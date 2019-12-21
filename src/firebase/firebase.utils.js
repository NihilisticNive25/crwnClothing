import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAAt-998oV_zerAsTbPQxdBPc7alqNaXtY",
    authDomain: "myfirstoauthapp-5a4e0.firebaseapp.com",
    databaseURL: "https://myfirstoauthapp-5a4e0.firebaseio.com",
    projectId: "myfirstoauthapp-5a4e0",
    storageBucket: "myfirstoauthapp-5a4e0.appspot.com",
    messagingSenderId: "1081043871263",
    appId: "1:1081043871263:web:ee91e29b5a23ef91c4572a",
    measurementId: "G-M6V5LMVVHX"
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                createdAt,
                email,
                ...additionalData,
            })
        }
        catch(err){
            console.log("error creating user", err.message);
        }
    }
    return userRef;


}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;