import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBumXFs9BqGg52oEDDOHCuJhk_hxnVNkd8',
  authDomain: 'tabernaculodeliberacion-895b8.firebaseapp.com',
  databaseURL: 'https://tabernaculodeliberacion-895b8.firebaseio.com',
  projectId: 'tabernaculodeliberacion-895b8',
  storageBucket: 'tabernaculodeliberacion-895b8.appspot.com',
  messagingSenderId: '782643645598'
}
firebase.initializeApp(config)

export default firebase
