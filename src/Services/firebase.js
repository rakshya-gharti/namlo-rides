  import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
  


  const firebaseConfig = {

  apiKey: "AIzaSyC5VsIjlv4W6qBzb8j-cMp2Tgx630aWeNI",

  authDomain: "namlo-rides-ce624.firebaseapp.com",

  databaseURL: "https://namlo-rides-ce624-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "namlo-rides-ce624",

  storageBucket: "namlo-rides-ce624.firebasestorage.app",

  messagingSenderId: "69510145321",

  appId: "1:69510145321:web:80129dd4d13d4c8a8e8338"

};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);