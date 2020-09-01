import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish"; 

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerTest">
            <h3>
              Adibe Mohamed{""}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @Abjadia
              </span>
             
            </h3>
          </div>
          <div className="post__headerDescription">
              <p>I challenge you to build a Twitter clone with </p>
          </div>
        </div>
        <img src="https://media.giphy.com/media/NVBR6cLvUjV9C/giphy.gif"/>
      <div className="post__footer">
        <ChatBubbleIcon fontSize="small" />
        <RepeatIcon fontSize="small" />
        <FavoriteBorderIcon fontSize="small" />
        <PublishIcon fontSize="small" /> 
      </div>
      </div>
    </div>
  );
}

export default Post;
