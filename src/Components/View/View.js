import React,{useEffect,useState,useContext} from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
function View() {
  const[userDetails,setuserDetails]=useState();
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    if (postDetails){
    const {userId} = postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setuserDetails(doc.data())
      })
    })
  }
  },[firebase,postDetails])
  if (!postDetails) return null;

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>Product : {postDetails.name}</span>
          <p>category : {postDetails.category}</p>
          <span>Date of Posted : {postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">  
          <p>Seller details</p>
          <p>Seller name : {userDetails.username}</p>
          <p>Phone Number : {userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;