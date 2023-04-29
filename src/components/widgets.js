import React from 'react'
import "./widgets.css"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
const Widgets = () => {
  const name = window.localStorage.getItem("name")
  return (
    <div>
         <TwitterTimelineEmbed
  sourceType="profile"
  screenName="elonmusk"
  options={{height: 1200}}
/>
    </div>
  )
}

export default Widgets