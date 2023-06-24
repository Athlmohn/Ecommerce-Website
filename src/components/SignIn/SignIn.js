import React,{useState} from 'react'
import './SignIn.css'
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../FireBase'
import { useNavigate,Link } from 'react-router-dom';
function SignIn() {
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
        email:"",
        password:"",
    })
  
    const [submitButtonDisabled,setsubmitButtonDisabled] = useState(false)
 
    const handleSubmit = (e) => {
      e.preventDefault();

      setsubmitButtonDisabled(true)
     signInWithEmailAndPassword(auth,values.email,values.password).then( async (res)=>{
          setsubmitButtonDisabled(false)

          navigate("/"); 
      })
      .catch((err) => console.log("Error-",err));
    };

  return (
    <div className="container">
    <div className="form">
      <form onSubmit={handleSubmit}>
        <p className="form-title">Log In</p>
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
            required
          />
          <label onClick={handleToggle}>{icon}</label>
        </div>
        <button type="submit" className="submit" disabled={submitButtonDisabled}>
          Log in
        </button>
        <div className="login-link">
            Create an account? <Link to="/signup">Login</Link>
          </div>
      </form>
    </div>
  </div>

  )
}

export default SignIn