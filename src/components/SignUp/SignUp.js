import React, { useState} from "react";
import "./SignUp.css";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {auth,provider} from '../../FireBase'
function SignUp() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(BsFillEyeFill);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (type === "password") {
      setIcon(BsFillEyeSlashFill);
      setType("text");
    } else {
      setIcon(BsFillEyeFill);
      setType("password");
    }
  };
 const [values,setValues]=useState({
    name:"",
    email:"",
    password:"",
 });

 const [submitButtonDisabled,setsubmitButtonDisabled] = useState(false)
 
  const handleSubmit = (e) => {
    e.preventDefault();

    setsubmitButtonDisabled(true)
    createUserWithEmailAndPassword(auth,values.email,values.password).then( async (res)=>{
        setsubmitButtonDisabled(false)
        const user = res.user;
        await updateProfile(user,{
            displayName:values.name,
        });
        navigate("/"); 
    })
    .catch((err) => console.log("Error-",err));
  };

  const handleGoogle = () =>{
    auth.signInWithPopup(provider).then((res)=>{
        console.log(res.user);
        navigate("/")
    })
  }
  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <p className="form-title">Create an Account</p>
          <div className="input-container">
            <input
              type="text"
              placeholder="User Name"
              name="username"
              onChange={(e) => setValues((prev)=>({...prev,name:e.target.value}))}
              required
            />
            <span></span>
          </div>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setValues((prev)=>({...prev,email:e.target.value}))}
              required
            />
            <span></span>
          </div>
          <div className="input-container">
            <input
              type={type}
              placeholder="Enter password"
              name="password"
              onChange={(e) => setValues((prev)=>({...prev,password:e.target.value}))}
              required minLength={6}
            />
            <label onClick={handleToggle}>{icon}</label>
          </div>
          <button type="submit" className="submit"  disabled={submitButtonDisabled}>Sign Up</button>

          <h4 className="google-or">or</h4>

          <button type="submit" className="google" onClick={handleGoogle}>
            SignIn with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
