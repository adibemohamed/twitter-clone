import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1benT4jrLH_oeK4n9twLd5681GKLV85I",
    authDomain: "twitter-clone-d4fca.firebaseapp.com",
    databaseURL: "https://twitter-clone-d4fca.firebaseio.com",
    projectId: "twitter-clone-d4fca",
    storageBucket: "twitter-clone-d4fca.appspot.com",
    messagingSenderId: "679559474951",
    appId: "1:679559474951:web:84123ca65f01b898295fa2",
    measurementId: "G-SZM0BVZNPB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default { db };