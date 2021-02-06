import 'dotenv/config'
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: "riya-paul-photos.appspot.com",
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export  {projectStorage, projectFirestore, timeStamp }