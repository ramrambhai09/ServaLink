// firebase-init.js
const firebaseConfig = {
  apiKey: "AIzaSyCS3Mtmql0tRAFiVg7LAjcBru_tY1EmO_w",
  authDomain: "new1-f9abc.firebaseapp.com",
  projectId: "new1-f9abc",
  storageBucket: "new1-f9abc.appspot.com",
  messagingSenderId: "188713961246",
  appId: "1:188713961246:web:7cd412770c6c0256bc2b0f"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
