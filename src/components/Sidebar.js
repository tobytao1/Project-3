import React from 'react'
import logo from "../assets/twitter-1-svgrepo-com.svg"
import "./Sidebar.css"
import "./tweetBox.css"
import SideBarOption from './SideBarOption'
import { Button } from '@mui/material'
import ProfileStatus from './ProfileStatus'
import { useNavigate } from 'react-router-dom';
import { BookmarkBorder,Home,ListAlt,MailOutline,MoreHoriz,NotificationsNone,PermIdentity,Search,Twitter, } from '@mui/icons-material'
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div id = "main">
    <div className='sidebar'>
    <img src={logo} alt="apple" className="logo" />
    <SideBarOption active Icon = {Home} navigate ={() => {
      navigate('/home')}} text = "Home" className = "option"/>
    <SideBarOption  Icon = {Search} className = "option" text = "Explore" />
    <SideBarOption Icon = {NotificationsNone} className = "option" text = "Notifications" />
    <SideBarOption  Icon = {MailOutline} className = "option" text = "Messages" />
    <SideBarOption  Icon = {ListAlt} className = "option" text = "Lists" />
    <SideBarOption  Icon = {BookmarkBorder} className = "option" text = "Bookmarks" />
    <SideBarOption  Icon = {PermIdentity} className = "option" navigate = {() => {navigate("/profile")}} text = "Profile" />
    <SideBarOption  Icon = {MoreHoriz} className = "option" text = "More" />
    <Button className="button">
          Tweet
    </Button>
    </div>
    <ProfileStatus/>
    </div>

  )
}
export default Sidebar;
