import React,{useEffect,useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css';
import {} from './Pages/Create'

import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext'; 
import Create from './Pages/Create';
import View from './Pages/ViewPost'


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
      <Post>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/view" element={<View/>}/>
      </Routes>
      </Post>
    </div>
  );
}
export default App