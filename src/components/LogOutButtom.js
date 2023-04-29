import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import "./Sidebar.css"

import { useEffect, useState } from 'react';

export default function BasicButtons() {
  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem("isLoggedin"));
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.setItem("isLoggedin", false);
    window.localStorage.setItem("name", "");
    setIsLoggedIn(false);
  }

  return (
    <Stack className ="stack" spacing={2} direction="row">
      {isLoggedIn ? null : <Button variant="outlined">Register Up</Button>}
      {isLoggedIn ? <Button id = "out" variant="outlined" onClick={logout}>Log Out</Button> : <Button variant="outlined" onClick={() => {
      navigate('/login')}}>Log In</Button>}
    </Stack>
  );
}
