// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { initializeApp } from 'firebase/app';

const login_provider = async (provider_str: string) => {

    alert(`${provider_str} functionality not yet supported`)

    // If we decide to go the 3rd party route
    // const firebaseConfig = {
    //     apiKey: "AIzaSyC9TWrqSMEdPabrUlCfJlF_PUZoh4hbV0o",
    //     authDomain: "switch-6613a.firebaseapp.com",
    //       // The value of `databaseURL` depends on the location of the database
    //     databaseURL: "https://switch-6613a-default-rtdb.firebaseio.com/",
    //     projectId: "switch-6613a",
    //     storageBucket: "switch-6613a.appspot.com",
    //     messagingSenderId: "484379287329",
    //     appId: "1:484379287329:web:9feb0df8c6ac911972e860",
    //     measurementId: "G-P7HM7BBD7S"
    // };
    
    // const app = initializeApp(firebaseConfig);
    // const auth = getAuth();
    // const provider = new GoogleAuthProvider();

    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // The signed-in user info.
    //     const user = result.user;
    //     console.log(user);
    //     // ...
    //   }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //     console.log(errorCode)
    //     alert(errorMessage)
    //   });
}

export default login_provider