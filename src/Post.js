// This component is used to display the post details and actions.

import { Avatar } from '@material-ui/core'
import React, {forwardRef} from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PostFooterIcons from './PostFooterIcons';
import UserPostFooterIcons from './UserPostFooterIcons';
import Moment from 'react-moment';
import 'moment-timezone';

const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
    isPostFooterIcon,
    tweetCreationTime,
    tweetId,
    likes
}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName} {" "}
                            <span className="post__headerSpecial">
                            {verified && <VerifiedUserIcon className="post__badge"/>}
                            @{username} . {<Moment tz="Asia/Calcutta" fromNow>{tweetCreationTime}</Moment>}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p className="max-lines">{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="post__footer">
                    {isPostFooterIcon ? <PostFooterIcons tweetId={tweetId} likes={likes}/> : <UserPostFooterIcons tweetId={tweetId} likes={likes}/>}                    
                </div>
            </div>
        </div>
    )
});

export default Post
