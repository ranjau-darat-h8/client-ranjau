import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBZ-64EswY1gBOyltTrIJxijJ7XMm7SrBc',
  authDomain: 'ranjaudarat-965a6.firebaseapp.com',
  databaseURL: 'https://ranjaudarat-965a6.firebaseio.com',
  projectId: 'ranjaudarat-965a6',
  storageBucket: 'ranjaudarat-965a6.appspot.com',
  messagingSenderId: '807012497746'
}
const firebaseApp = firebase.initializeApp(config)

export const db = firebaseApp.database()
