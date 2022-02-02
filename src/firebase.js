// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXJoED6U4rZ9kfi8SMJbrhgTxC7yClOBs",
  authDomain: "react-survey-48e71.firebaseapp.com",
  projectId: "react-survey-48e71",
  storageBucket: "react-survey-48e71.appspot.com",
  messagingSenderId: "344726580565",
  appId: "1:344726580565:web:0725e7271d5f973a0093dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db

async function getSurveys(db) {
  const surveysCol = collection(db, 'surveys');
  const snapshot = await getDocs(surveysCol);
  const surveysList = snapshot.docs.map(doc => doc.data());
  return surveysList;
}

export {getSurveys}