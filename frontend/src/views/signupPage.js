import React from 'react'
import logo from "../assets/twitter-1-svgrepo-com.svg"
import googleLog from "../assets/google-color-svgrepo-com.svg"
import { useNavigate, Link } from 'react-router-dom';
function RegisterForm() {
  const navigate = useNavigate();
  const register = () => {
        navigate('/registerForm');}  
  return (
    <div className="logo-box">
      <img src={logo} alt="apple" className="logo" />
      <h2>Join Twitter today</h2>
      <button>
        <img src={googleLog} alt="apple" />
        Sign up with Google
      </button>
      <hr></hr>
      <span>Or</span>
      <form>
        <button onClick= {register}>Create account</button>
      </form>
    </div>
  );
}
 
export default RegisterForm;