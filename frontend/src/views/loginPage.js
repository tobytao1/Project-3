import React, {useState} from 'react'
import logo from "../assets/twitter-1-svgrepo-com.svg"
import googleLog from "../assets/google-color-svgrepo-com.svg"
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import {userNameSave} from "../redux/user"

import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const {name} = useSelector((state) => state.user
);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  async function submit(e) {
    e.preventDefault();
    try {
        await axios.post("http://localhost:8000/api/login",{name:username,password},{
          headers: {
            'Content-Type': 'application/json'
          }})
        .then(res => {
            if (res.data.message == "Login Successful!") {
                dispatch(userNameSave(username));
                window.localStorage.setItem("isLoggedin",true);
                window.localStorage.setItem("name",username);
                console.log("Successfully Logged in");
                navigate('/home');
            } else {
               console.log("Either userName or password not match!");
            }
        });
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
        <button onClick = {submit}>Next</button>
      </form>
      <button>Forget Password</button>
      <p>
        Don't Have an account<Link to = "/register" id = "sign">Sign up</Link>
      </p>
    </div>
  );
}
 
export default Login;