import React,{useEffect,useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css';
import {} from './Pages/Create'

import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';


function App() {
  const {setUser} =useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     
    </div>
  );
}
export default App