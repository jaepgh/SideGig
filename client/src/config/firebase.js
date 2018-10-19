import fireb from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBGjWb5k4ptfYdWZObVPB0n0hgaok-BR6c",
  authDomain: "sidegig-9e908.firebaseapp.com",
  databaseURL: "https://sidegig-9e908.firebaseio.com",
  projectId: "sidegig-9e908",
  storageBucket: "sidegig-9e908.appspot.com",
  messagingSenderId: "650955371945"
};

fireb.initializeApp(config);
export default fireb;
