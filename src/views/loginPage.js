import React, {useState} from 'react'
import logo from "../assets/twitter-1-svgrepo-com.svg"
import googleLog from "../assets/google-color-svgrepo-com.svg"
import axios from "axios";
import NavBar from "./naviBar";
import { useNavigate, Link } from 'react-router-dom';
import NaviBar from "./naviBar";

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  async function submit(e) {
    e.preventDefault();
    try {
        await axios.post("http://localhost:3000/api/login",{username,password})
    }catch(err) {
        console.log(err);
    }
  }
  return (
    <div className="logo-box">

      <img src={logo} alt="apple" className="logo" />
      <h2>Sign In to Twitter</h2>
      <button>
        <img src={googleLog} alt="apple" />
        Sign in with Google
      </button>
      <hr></hr>
      <span>Or</span>
      <form action = "POST">
        <input id= "username" onChange= {(e) => {setUserName(e.target.value)}} type="text" placeholder="Phone email or username" />
        <input type="text" onChange= {(e) => {setPassword(e.target.value)}} placeholder="Password" />
        <button>Next</button>
      </form>
      <button>Forget Password</button>
      <p>
        Don't Have an account<Link to = "/register" id = "sign">Sign up</Link>
      </p>
    </div>
  );
}
 
export default Login;