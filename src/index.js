import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyALL-8lqLrIOaG28E0eTAo9NPzb91ZN7W4",
  authDomain: "ecommerce-garzon.firebaseapp.com",
  projectId: "ecommerce-garzon",
  storageBucket: "ecommerce-garzon.appspot.com",
  messagingSenderId: "818393773512",
  appId: "1:818393773512:web:4e2042da700ea0cdbdbcfd",
  measurementId: "G-70YCZR8SPL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
