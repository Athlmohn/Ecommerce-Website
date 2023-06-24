import React,{useState,useEffect} from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { auth } from "../../FireBase";
function Header(props) {

  const [username,setuserName] = useState('')

  useEffect(() => {
  auth.onAuthStateChanged((user)=>{
     if(user){
         setuserName(user.displayName)
         }else setuserName('Sign Up')
  })
  }, [])
  

  return (
    <header className="header">
      <Link to="/" className="home-link">
        <h1>Goshopz</h1>
      </Link>
      <Link to="/signin">
        <button className="header-btn">{username}</button>
      </Link>
    </header>
  );
}

export default Header;
