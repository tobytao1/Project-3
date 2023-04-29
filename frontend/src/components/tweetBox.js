import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios';
import TransparentDivider from "./Dividor";
import "./tweetBox.css";
import { useSelector } from 'react-redux';
import UploadAndDisplayImage from "./ImageUpload";
import { IconButton } from "@mui/material";
import AvatarLogo from "../assets/IY9Gx6Ok_400x400.jpeg"
import {
  ImageOutlined,
  GifBoxOutlined,
  PollOutlined,
  SentimentSatisfiedOutlined,
  CalendarTodayOutlined,
  LocationOnOutlined
} from "@mui/icons-material"

function TweetBox({isEddited,_id}) {
  async function edit(e) {
    e.preventDefault();
    console.log(tweetMessage);
    console.log("1" + _id);
    try {
        await axios.post("http://localhost:8000/api/tweets/update",{tweetId: _id, content : tweetMessage})
        .then(res => {
            console.log("Successfully updated");
        });
    }catch(err) {
        console.log(err);
    }
  }
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const { value } = useSelector((state) => state.user);
  const {img} = useSelector((state) => state.image
  );
  const loggedUser = window.localStorage.getItem("name");
  const [textareaRows, setTextareaRows] = useState(1); // initialize rows to 1
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

    setTweetMessage(event.target.value); // update tweetMessage state with new input value
  };
  const sendTweet = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://jingzhou-tao-qingguo-hao-project3-3qhk.onrender.com/api/tweets/create", {content: tweetMessage, imageUrl: img, user: loggedUser})
      .then(res => {
        if (res.data.message === "Username is already registered") {
          alert(res.data.message);
        } else {
          console.log("Successfully Logged in");
        }
      });
    } catch (err) {
      console.log(err);
    }

    setTweetMessage("");
    setTweetImage("");
    setTextareaRows(1); // reset rows to 1 after sending tweet
  };

  return (
    <div className="tweetBox">
      {isEddited ? null : <><h2 id="homeText">Home</h2>
      <TransparentDivider /></>}
      <form>
        <div className="tweetBox__input">
          <Avatar id = "avatar" src={AvatarLogo} />
          <textarea id = "text"
            value={tweetMessage}
            onChange={handleTextareaChange}
            placeholder="What's happening?"
            rows={textareaRows} // set rows dynamically based on height of content
          />
        </div>
        <div className = "tweetbox_icons">
          <div className = "icon-container">
          <UploadAndDisplayImage/>
          <IconButton>
          <GifBoxOutlined className = "tweetbox_icon"/>
          </IconButton>
          <IconButton>
          <PollOutlined className = "tweetbox_icon"/>
          </IconButton>
          <IconButton>
          <SentimentSatisfiedOutlined className = "tweetbox_icon"/>
          </IconButton>
          <IconButton>
          <CalendarTodayOutlined className = "tweetbox_icon"/>
          </IconButton>
          <IconButton>
          <LocationOnOutlined className = "tweetbox_icon"/>
          </IconButton>
          </div>
          {isEddited ?  <Button onClick={edit} type="submit">
          Update
        </Button>  :<Button onClick={sendTweet} type="submit" className="tweetBox__button">
          Tweet
        </Button>}
        </div>
       
      </form>
    </div>
  );
}

export default TweetBox;
