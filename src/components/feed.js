import React from 'react'
import TweetBox from './tweetBox'
import AllTweets from './AllTweets'
import { Route, Routes } from 'react-router-dom';
import "./feed.css"
import TransparentDivider from './Dividor'
import Widgets from './widgets'
import Sidebar from './Sidebar'
import Profile from './Profile';
import UserTweets from './userTweets';

import { useLocation } from 'react-router-dom';

const MyComponent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/home' && <TweetBox isEddited={false}/>}
      {location.pathname === '/profile' && <Profile />}
      <TransparentDivider />
    </>
  );
};

const Feed = () => {
  const location = useLocation();
  return (
    <>
      <div className="primary">
        <div className="left">
          <Sidebar />
        </div>
        <div className="home">
          <MyComponent />
          {location.pathname === '/home' &&  <AllTweets />}
          {location.pathname === '/profile' &&  <UserTweets />}
        </div>
        <div className="right">
          <Widgets />
        </div>
      </div>
    </>
  );
};

export default Feed;
