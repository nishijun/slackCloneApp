import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
 const config = {
    apiKey: "AIzaSyCUa3vp6S08N1aAGgW26pU_c3zVr65bljw",
    authDomain: "slack-clone-app-11521.firebaseapp.com",
    databaseURL: "https://slack-clone-app-11521.firebaseio.com",
    projectId: "slack-clone-app-11521",
    storageBucket: "slack-clone-app-11521.appspot.com",
    messagingSenderId: "1059592861083",
 }
 firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}
