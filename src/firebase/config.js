
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDKfXQg8g4_boj-UQ-7GyGSMAwvSZAAS-g",
    authDomain: "olx-clone-bbbf1.firebaseapp.com",
    projectId: "olx-clone-bbbf1",
    storageBucket: "olx-clone-bbbf1.appspot.com",
    messagingSenderId: "1045860576709",
    appId: "1:1045860576709:web:6409820e6cb5390f8aefac",
    measurementId: "G-2YV6RS9VED"
};

export default firebase.initializeApp(firebaseConfig)