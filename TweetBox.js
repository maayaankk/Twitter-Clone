import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase"
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Mayank Chotaliya",
            username: 'mayankChotaliya',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://i.pinimg.com/564x/fd/46/41/fd4641831b5f67d9c39f187a0604541d.jpg"
        });
        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className='tweetBox'>
            <form >
                <div className='tweetBox__input'>
                    <Avatar src="https://i.pinimg.com/564x/fd/46/41/fd4641831b5f67d9c39f187a0604541d.jpg" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="what's happening?"
                        type='text'>
                    </input>
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className='tweetBox__imageInput'
                    placeholder='Optional: Enter image URL'
                    type='text'>
                </input>
                <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
