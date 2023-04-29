import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import dotLog from "../assets/dot-menu-more-2-svgrepo-com.svg";
import AllTweets from './AllTweets.css';
import axios from "axios";
import React from 'react'

function Drop({_id}) {
    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/tweets/delete",{tweetId: _id})
            .then(res => {
                res.json({
                    message:"succesfully Deleted!"
                })
            });
        }catch(err) {
            console.log(err);
        }
      }
  return (
    <>
      <div class="menu-nav">
        <div class="dropdown-container" tabindex="-1">
          <img src = {dotLog} id = "dots" class="three-dots" ></img>
          <div class="dropdown">
            {}<a onClick = {submit}><div>Delete</div></a>
            <a href="#"><div>Edit</div></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drop;
