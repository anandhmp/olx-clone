import React,{useContext} from 'react'
import './Header.css'
import {Link, useNavigate} from 'react-router-dom';

import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';

const Header = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
  return (
    
    <div className="headerParentDiv">
      <div className='headerChildDiv'>
          <div className='brandName'>
          <Link to='/'>
          <OlxLogo></OlxLogo>
          </Link>
          </div>

        <div className="placeSearch">
        <Search></Search>
        <input type="text" />
        <Arrow></Arrow>
        </div>

        <div className="productSearch">
        <div className="input">
          <input
            type="text"
            placeholder="Find car,mobile phone and more..."
          />
        </div>
        <div className="searchAction">
          <Search color="#ffffff"></Search>
        </div>
        </div>

        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>

        <div className="loginPage">
        <Link to="/login">
            <span>{user? user.displayName : 'Login'}</span>
            <hr />
            
          </Link>
        </div>
        {user && <span className='logout-menu' onClick={()=>{
          firebase.auth().signOut();
          navigate("/login");
        }}>Logout</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to={'/create'} className='sell-text'>SELL</Link>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Header