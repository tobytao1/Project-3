import React from 'react'
import "./Popup.css"
import {Button} from "@mui/material"
import axios from 'axios'
const Popup = (props) => {      
  return (props.trigger) ? (
        <div className ="popup">
            <div className = "popup-inner">
                {props.children}
            </div>
            </div>
  ) : ""
}

export default Popup