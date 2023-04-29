import { Avatar, Button } from "@mui/material";
import React, { useState,useEffect } from "react";
import axios from 'axios';
import TransparentDivider from "./Dividor";
import { useSelector } from 'react-redux';
import UploadAndDisplayImage from "./ImageUpload";
import { IconButton } from "@mui/material";
import AvatarLogo from "../assets/IY9Gx6Ok_400x400.jpeg"
import bg from "../assets/1500x500.jpeg";
import "./Profile.css"
import {
  ImageOutlined,
  GifBoxOutlined,
  PollOutlined,
  SentimentSatisfiedOutlined,
  CalendarTodayOutlined,
  LocationOnOutlined
} from "@mui/icons-material"


function Profile() {
  const name = window.localStorage.getItem("name");
  const { value } = useSelector((state) => state.user);
  const ds = window.localStorage.getItem("description");
  const [description, setDescription] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [textareaRows, setTextareaRows] = useState(1);
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/getDescription/" + name + "/");
        console.log(res);
        console.log(res.data.response[0]);
        setDescription(res.data.response[0].description);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTweets()
  }, [])
  const handleTextareaChange = (event) => {
    const textareaLineHeight = 24; // customize this value based on your font size and line height
    const previousRows = event.target.rows;
    event.target.rows = 1; // reset number of rows to 1 to calculate the new height

    const currentRows = Math.ceil(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    else {
      event.target.rows = currentRows;
      setTextareaRows(currentRows); // update state to force re-render with new rows value
    }

    setInputDescription(event.target.value); // update tweetMessage state with new input value
  };
  const sendDescription = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/updateDescription", {name, description: inputDescription},{
        headers: {
          'Content-Type': 'application/json'
        }})
      .then(res => {
        console.log("updated!");
        window.localStorage.setItem("description",description);
        setDescription(inputDescription);
        setInputDescription("");
        setTextareaRows(1);
      });
    } catch (err) {
      console.log(err);
    }
  }
 return (
    <div className="tweetBox">
        <div style={{ 
      backgroundImage: `url(${bg})` 
    }}>
        <div className="tweetBox__input">
          <Avatar id = "avatar" src={AvatarLogo} style={{ width: 120, height: 120 }}/>
          <h4 className="name">{value} </h4>
        </div>
        </div>
        <div>{description}</div>
        <textarea id = "text"
            value={inputDescription}
            onChange={handleTextareaChange}
            placeholder="Describe yourself"
            rows={textareaRows} // set rows dynamically based on height of content
          />
        <Button onClick={sendDescription} type="submit">
          Describe yourself
        </Button>
    </div>
  );
}


export default Profile;
