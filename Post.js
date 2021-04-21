import React, {forwardRef}  from 'react'
import "./Post.css"
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
}, ref) => {
    return (
        <div className="Post" ref={ref}>
        <div className="Post__avatar">
            <Avatar src={avatar}></Avatar>
        </div>
        <div className="Post__body">
            <div className="Post__header">
                <div className="Post__headerText">
                    <h3>
                        {displayName}
                        <span className="Post__headerSpecial">
                                    {verified && <VerifiedUserIcon className="Post__badge "/>}@{username}
                        </span>
                    </h3>
                </div>  
                <div>
                    <div className="Post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                    <img 
                    src={image} 
                    alt=""/>
            </div>
            <div className="Post__footer">
            <ChatBubbleOutlineIcon fontSize="small"/>
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small"/>
                <PublishIcon fontSize="small"/>
            </div>
        </div>
    </div>
)})


export default Post;
