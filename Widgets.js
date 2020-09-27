import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, } from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className='widgets__searchIcons' />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className='widgets__widgetContainer'>
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1298093009355960320"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName='PostMalone'
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={""}
                    options={{ text: "Find your purpose or you wasting air!", via: "mayankchotaliy5" }}
                />
                <TwitterTweetEmbed tweetId={"1196968884550549505"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName='JuiceWorlddd'
                    options={{ height: 400 }}
                />

                <TwitterTweetEmbed tweetId={"1200700928736710663"} />
            </div>
        </div>
    )
}

export default Widgets
