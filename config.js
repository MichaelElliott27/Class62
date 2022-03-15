import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAVTMQI-hQNcPkcT7OjxqR5tuOTphp3xf0",
  authDomain: "school-attendence-2c2ed.firebaseapp.com",
  databaseURL: "https://school-attendence-2c2ed-default-rtdb.firebaseio.com",
  projectId: "school-attendence-2c2ed",
  storageBucket: "school-attendence-2c2ed.appspot.com",
  messagingSenderId: "267793177194",
  appId: "1:267793177194:web:9c684eaa3d0fcf4f53c813"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
 
