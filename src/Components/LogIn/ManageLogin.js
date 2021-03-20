import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../LogIn/firebase.config";

export const initializeLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
}
export const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(result => {
            const { displayName, email, photoURL } = result.user
            console.log(displayName, email, photoURL);
            const userInfo = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success:true
            }
            return userInfo;
        })
        .catch(err => {
            console.log(err)
            console.log(err.message)
        })
}
export const googleSignOut = () => {
    return firebase.auth().signOut()
        .then(res => {
            const signOutInfo = {
                name: '',
                email: '',
                displayName: '',
                photo: '',
                success: false
            }

            return signOutInfo;
        })
        .catch(err => {
            console.log(err)
            console.log(err.message)
        })
}
//fb sign in authentication
// export const signInFb = () => {
//     const fbProvider = new firebase.auth.FacebookAuthProvider();
//     return firebase.auth().signInWithPopup(fbProvider).then((result) => {
//         /** @type {firebase.auth.OAuthCredential} */
//         var credential = result.credential;

//         // The signed-in user info.
//         var user = result.user;
//         user.success=true;
//         return user;
//         console.log('here is the user info', result);
//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         var accessToken = credential.accessToken;

//         // ...
//     })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             var email = error.email;
//             var credential = error.credential;

//             // ...
//         });
// }

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            // console.log(userCredential)
            // Signed in 
            //var user = userCredential.user;
            const newUserInfo = res.user
            newUserInfo.success = true;
            newUserInfo.error = '';
            //   setUser(newUserInfo);
            newUserInfo.name=addUserName(name);
            return newUserInfo;
        })

        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
            const newUserInfo = {};
            newUserInfo.error = errorMessage;
            newUserInfo.success = false;
            //   setUser(newUserInfo)
            return newUserInfo;
        });
}
export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            // console.log(res.user)
            const newUserInfo = res.user;
            newUserInfo.success = true;
            newUserInfo.error = '';
            return newUserInfo;
            console.log('sign in user info', res.user)
        })
        .catch((error) => {
            var errorMessage = error.message;
            // console.log(errorMessage)
            const newUserInfo = { };
            newUserInfo.error = errorMessage;
            newUserInfo.success = false;
            // setUser(newUserInfo)
            // setLoggedInUser(newUserInfo);
            return newUserInfo;
        });
}
const addUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
        // photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function () {
        console.log("user name added who is: ")

        // Update successful.
    }).catch(function (error) {
        // An error happened.
        console.log(error);
    });
    return name;
}