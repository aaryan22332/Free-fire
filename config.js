import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAzuZ8JbwyktlYeU5kpW0b_ceXHqJPKukU",
    authDomain: "book-abd80.firebaseapp.com",
    projectId: "book-abd80",
    storageBucket: "book-abd80.appspot.com",
    messagingSenderId: "364505633458",
    appId: "1:364505633458:web:d156584ccdc7bf177aefab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()