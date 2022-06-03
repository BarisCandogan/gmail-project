import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAFtheVTTmaPGms5rkVhrz_3D649Q7nzUI',
  authDomain: 'project-a1436.firebaseapp.com',
  projectId: 'project-a1436',
  storageBucket: 'project-a1436.appspot.com',
  messagingSenderId: '770611814477',
  appId: '1:770611814477:web:4e860a24a45286d38dfc04',
})

// Initialize Firebase
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, provider }
