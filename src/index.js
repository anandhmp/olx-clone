import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import {FirebaseContext} from './store/Context'
import Context from './store/Context';
import firebase from './firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseContext.Provider value={{firebase}}>
    <Context>
    <App />
    </Context>
    </FirebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
