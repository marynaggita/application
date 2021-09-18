import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBzX7UZStMMPLJWfMijvPmbUJxqOT-U57I",
  authDomain: "global-alternatives-platform.firebaseapp.com",
  databaseURL: "https://global-alternatives-platform-default-rtdb.firebaseio.com",
  projectId: "global-alternatives-platform",
  storageBucket: "global-alternatives-platform.appspot.com",
  messagingSenderId: "333766697916",
  appId: "1:333766697916:web:3dec1d5d286c172c3d41b9"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshts: true})
export default firebase;

