import React, {useEffect,useState} from 'react'
import { formatDistance } from "date-fns"
import { subDays } from "date-fns/esm"
import axios from "axios"
import "./AllTweets.css"
import { Avatar} from "@mui/material";
import dotLog from "../assets/dot-menu-more-2-svgrepo-com.svg"
import Drop from './dropDown'
import { MoreHoriz,ChatBubbleOutline,Repeat
,FavoriteBorderOutlined,PublishOutlined } from '@mui/icons-material'
import AvatarLogo from "../assets/IY9Gx6Ok_400x400.jpeg"
import MenuListComposition from './drop'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { userNameSave } from '../redux/user'

const AllTweets = () => {
  const [tweets, setTweets] = useState([])
  const name = window.localStorage.getItem("name");
  const { value } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTweets = async () => {
      const res = await axios.get("http://localhost:8000/api/tweets",{})
      setTweets(res.data.response.reverse())
    }
    fetchTweets()
  }, [tweets])
  const setUserProfile = (name) => {
    dispatch(userNameSave(name));
  }
  return (
    <div>
			{tweets.map((tweet) => (
				<div className="tweet-container">
         
						<div className="tweet-header">
            <Link to="/profile" onClick = {() => setUserProfile(tweet.user)}>
                        <Avatar id = "avatar" src={AvatarLogo} />
								<h4 className="name">{tweet.user} </h4>
                </Link>
							<p className="date-time">
								{formatDistance(subDays(new Date(tweet.createdAt), 0), new Date())} ago
							</p>
                            {(name == tweet.user) && <MenuListComposition  _id ={tweet._id}/>}
						</div>
            
						<p id="content">{tweet.content}</p>
                        {tweet.imageUrl && <img
            id ="img"
            alt="not found"
            width={"250px"}
            src={tweet.imageUrl}
          />}
                        <div className= "content-footer">
                        <ChatBubbleOutline fontSize = "small" className = "content-icon"/>
                        <Repeat  fontSize = "small" className = "content-icon"/>
                        <FavoriteBorderOutlined fontSize = "small" className = "content-icon"/>
                        </div>
				</div>
			))}
		</div>
  )
}

export default AllTweets