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
            image: 'https://pbs.twimg.com/media/EZxyuEqXsAM3EOh?format=jpg&name=small',
            text: tweetMessage,
            avatar: ""
        })

        setTweetMessage("");
        setTweetImage("");
    }

    return <div className="tweetBox">
               <form>
                    <div className="tweetBox__input">
                        <Avatar src=""/>
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
