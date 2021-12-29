import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    // your config
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

if (location.hostname === "localhost") {
    firebase.firestore().settings({
      host: "localhost:8080",
      ssl: false
    });

    firebase.functions().useFunctionsEmulator("http://localhost:5001");
  }