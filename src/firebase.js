import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBW2NS_xs3muFDM7cVaPoI04yA0MmTAD0c",
    authDomain: "challange-343c4.firebaseapp.com",
    projectId: "challange-343c4",
    storageBucket: "challange-343c4.appspot.com",
    messagingSenderId: "1038140208164",
    appId: "1:1038140208164:web:49e1a0492da492814114b1",
    measurementId: "G-QWV3KXC74W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};