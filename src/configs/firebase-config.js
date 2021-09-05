

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCl7ZrUL1XuTGSujSrkKNQlE1bQM_7xsGQ",
  authDomain: "tlog-2f2d5.firebaseapp.com",
  projectId: "tlog-2f2d5",
  storageBucket: "tlog-2f2d5.appspot.com",
  messagingSenderId: "216136874870",
  appId: "1:216136874870:web:a5e17a2457d73bdd25d857",
  measurementId: "G-7S1J2X8DD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;