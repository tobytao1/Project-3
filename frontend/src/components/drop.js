import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import dotLog from "../assets/dot-menu-more-2-svgrepo-com.svg";
import './AllTweets.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from "axios";
import Popup from './Popup';
import TweetBox from './tweetBox';


export default function MenuListComposition({_id,isPopped}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const content = "HAHAHA";
  const [buttonPopup, setButtonPopup] = useState(false);
 

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    setButtonPopup(false);
  };

  async function submit(e) {
    e.preventDefault();
    try {
        await axios.post("https://jingzhou-tao-qingguo-hao-project3-3qhk.onrender.com/api/tweets/delete",{tweetId: _id})
        .then(res => {
            res.json({
                message:"succesfully Deleted!"
            })
        });
    }catch(err) {
        console.log(err);
    }
  }

  

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack className = "dropDown" direction="row" spacing={2}>
      <div >
        <Button 
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <img className = "dots" src = {dotLog}/>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={submit}><DeleteOutlineIcon size = "small" /><text clasName="delete">Delete</text></MenuItem>
                    <MenuItem onClick={() => setButtonPopup(true)}><DeleteOutlineIcon size = "small" /><text clasName="delete">Edit</text></MenuItem>
                    <Popup trigger = {buttonPopup} _id>
                      {/* <h3>My PopUp</h3>
                      <p>This is my button triggered popup</p> */}
                      <TweetBox isEddited={true} _id ={_id}/>
                    </Popup>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
