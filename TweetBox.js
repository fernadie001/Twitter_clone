import React, { useState } from 'react'
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Narkalix',
            username: 'officialNarkalix',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 
            "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/120093540_101637815017862_5703186089481698995_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=102&_nc_ohc=wkYXjYzr628AX-CFJGV&tp=1&oh=904fa81284e6b28c28a06dc010d018d3&oe=5FE75A28",
        })

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/120093540_101637815017862_5703186089481698995_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=102&_nc_ohc=wkYXjYzr628AX-CFJGV&tp=1&oh=904fa81284e6b28c28a06dc010d018d3&oe=5FE75A28"></Avatar>
                    <input 
                    onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="Whats happening?" 
                        type="text"/>
                </div>
                <input 
                value={tweetImage}
                onChange={e => setTweetImage(e.target.value
                    )}
                className="tweetBox_ImageInput"
                placeholder="GIF Goes Here" 
                type="text"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
