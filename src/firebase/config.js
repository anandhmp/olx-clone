import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBCdlTpfLr4Aw6_TY9-Z8lHkhcBxwgTqzI",
    authDomain: "olx-clone-ee2b9.firebaseapp.com",
    projectId: "olx-clone-ee2b9",
    storageBucket: "olx-clone-ee2b9.appspot.com",
    messagingSenderId: "48909203533",
    appId: "1:48909203533:web:4c731b0a45b7edf7dc8404"
  };

  export default firebase.initializeApp(firebaseConfig);
  