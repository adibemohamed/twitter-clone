import React from 'react'
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';

import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening?</h2>

                <TwitterTweetEmbed tweetId={"1300913237869752321"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenMode="nasa"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://facebook.com/celeverazi"}
                    options={{ text: "#react is awesome", via: "cleaver" }}
                />

            </div>
        </div>
    )
}

export default Widgets
