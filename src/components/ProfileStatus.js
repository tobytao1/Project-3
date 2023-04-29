import React, {useState, useEffect} from 'react'
import { Avatar } from '@mui/material'
import AvatarLogo from "../assets/IY9Gx6Ok_400x400.jpeg"
import "./Sidebar.css"
import "./AllTweets.css"
import LogOutButtom from "./LogOutButtom";
import { useNavigate, Link } from 'react-router-dom';

const ProfileStatus = () => {
    const navigate = useNavigate();
    const name = window.localStorage.getItem("name");
    const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem("isLoggedin"));
    useEffect(() => {
      setIsLoggedIn(window.localStorage.getItem("isLoggedin"));
    },[window.localStorage.getItem("isLoggedin")]);
    console.log(isLoggedIn);
  return (
    <>
    <Link to="/profile">
    <div className = "profile" onClick = {() => {navigate('/profile')}}>
        {isLoggedIn ? <Avatar id = "avatar" src={AvatarLogo} /> : "1"}
        {isLoggedIn ? <h4 className="name">{name} </h4> : null}
        <div>
    </div>
    </div>
    </Link>
    <div>
     <LogOutButtom/>
     </div>
     </>
  )
}

export default ProfileStatus

