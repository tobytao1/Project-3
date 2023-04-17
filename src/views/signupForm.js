import React,{useState} from 'react'
import axios from 'axios' 
import logo from "../assets/twitter-1-svgrepo-com.svg"
import googleLog from "../assets/google-color-svgrepo-com.svg"
import { useNavigate, Link } from 'react-router-dom';
function RegisterForm() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    async function submit(e) {
      e.preventDefault();
      try {
          await axios.post("http://localhost:3000/api/register",{username,password})
      }catch(err) {
          console.log(err);
      }
    }
  return (
    <div className="logo-box">
      <h2>Create your account</h2>
      <form>
        <input id= "username" onChange= {(e) => {setUserName(e.target.value)}} type="text" placeholder="Phone email or username" /> 
        <input id= "password" onChange= {(e) => {setPassword(e.target.value)}} type="text" placeholder="Password" />  
        <button onClick= {submit}>Submit</button>
      </form>
    </div>
  );
}
 
export default RegisterForm;