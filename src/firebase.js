import Firebase from 'firebase'

const app = Firebase.initializeApp({
  apiKey: 'AIzaSyCoZ95iqYKim2gcujngCS8Q2oEnM6_QL8o',
  authDomain: 'ranjau-darat.firebaseapp.com',
  databaseURL: 'https://ranjau-darat.firebaseio.com',
  projectId: 'ranjau-darat',
  storageBucket: 'ranjau-darat.appspot.com',
  messagingSenderId: '1078988882595'
})

export const db = app.database()
