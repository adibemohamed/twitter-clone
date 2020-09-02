import React, {useState} from 'react'
import './Tweetbox.css';
import {Avatar, Button} from '@material-ui/core';
import db from './firebase/firebase';

function Tweetbox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Adibe Mohamed',
            username: 'adibe_mohamed',
            verified: true,
            image: tweetImage,
            text: tweetMessage,
            avatar: "https://avatars2.githubusercontent.com/u/52131981?s=460&u=fde48fb7ed15f03d5cd9d19d3eb42c967065ecce&v=4"
        })

        setTweetMessage("");
        setTweetImage("");
    }

    return <div className="tweetBox">
               <form>
                    <div className="tweetBox__input">
                        <Avatar src="https://avatars2.githubusercontent.com/u/52131981?s=460&u=fde48fb7ed15f03d5cd9d19d3eb42c967065ecce&v=4"/>
                        <input 
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?" 
                        type="text"></input>
                    </div>
                    <input 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"/>
                    <Button onClick={sendTweet} type="submit"  className="tweetBox__tweetButton">Tweet</Button>
               </form>
        </div>
    
}

export default Tweetbox
