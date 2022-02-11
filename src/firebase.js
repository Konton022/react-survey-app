import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, onValue} from "firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXJoED6U4rZ9kfi8SMJbrhgTxC7yClOBs",
    authDomain: "react-survey-48e71.firebaseapp.com",
    databaseURL: "https://react-survey-48e71-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-survey-48e71",
    storageBucket: "react-survey-48e71.appspot.com",
    messagingSenderId: "344726580565",
    appId: "1:344726580565:web:0725e7271d5f973a0093dc"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);
const pushSurvey = (db, data) => {
    push(ref(db, 'surveys'), data)
} 

const subscribeSurvey = (cb) => {
    onValue(ref(db, 'surveys'), snapshot=> {
        const data =  snapshot.val();
        // const key = snapshot.key;
        console.log('data', data);
        cb(data)
    })
}


export {db, pushSurvey, subscribeSurvey}