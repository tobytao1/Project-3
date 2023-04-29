import React from 'react'
import "./SideBarOption.css";
import { IconButton } from '@mui/material';
const SideBarOption = (props) => {
  const handleEvent = () => {
    console.log("1");
  }
  const {text, Icon, active,navigate} = props;
  return (
    <div className = {`sidebar-option ${active && 'sidebar-option_active'}`}>
      <IconButton onClick = {navigate}>
     <Icon className = "icon" onClick ={handleEvent}/>
     <h2>{text}</h2>
     </IconButton> 
    </div>
  )
}

export default SideBarOption