// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'; 
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvmMUEhIHDO2bOeoG3Zrc1ktjTCveE1hc",
    authDomain: "i-know-a-spot-5bfe2.firebaseapp.com",
    projectId: "i-know-a-spot-5bfe2",
    storageBucket: "i-know-a-spot-5bfe2.appspot.com",
    messagingSenderId: "361341067539",
    appId: "1:361341067539:web:c3cc3a55d15224f4e73ae6",
    databaseURL: "https://i-know-a-spot-5bfe2-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
