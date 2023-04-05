import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

var config = firebaseConfig;
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
