import React from 'react';
import './Feed.css'; 
import Tweetbox from './Tweetbox';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
           <div className="feed__header">
               <h2>Home</h2>
           </div>

            {/* TweetBox */}
            <Tweetbox />


           

            {/* Post */} 
            <Post 
            displayName="Adibe" 
            username="adibe_mohamed"
            verified={true}
            text="Yooooooo it's working"
            avatar=""
            image="https://media.giphy.com/media/NVBR6cLvUjV9C/giphy.gif"
            /> 

        </div>
    )
}

export default Feed
