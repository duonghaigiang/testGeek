import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/component/page/main/Home";
import { AuthContextProvider } from "./component/context/contextAPI";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbeuZMwFBUMyFanEqMVLZGhUY7Rym2HLk",
  authDomain: "geektesst.firebaseapp.com",
  projectId: "geektesst",
  storageBucket: "geektesst.appspot.com",
  messagingSenderId: "389264615245",
  appId: "1:389264615245:web:6ba1697e1809bc65623904",
  measurementId: "G-6CEY76DE1M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
