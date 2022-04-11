// This component allows the users to perform actions such as like and unlike the post

import React, {useState, useEffect} from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';

function PostFooterIcons({tweetId, likes}) {

    const [isClicked, setIsClicked] = useState(false)
    const [newLikes , setNewLikes] = useState(likes)

    const likeHandle = () => {
        setIsClicked(true)
        console.log("In like click handle")
        setNewLikes(prev => prev + 1)
    }

    const unLikeHandle = () => {
        setIsClicked(false)
        console.log("in dislike handle")
        setNewLikes(prev => prev - 1)
    }

    useEffect(() => {
        console.log(newLikes)
        axios.put(`http://localhost:8080/twitter/tweets/like/${tweetId}`, {likes: newLikes})
        .then(response => console.log("value updated"))
    }, [newLikes])

    return (
        <React.Fragment>
           
            {isClicked ? <span style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}><FavoriteIcon fontSize="small" style={{ color: 'red', cursor: 'pointer'}} onClick={unLikeHandle}/>
            <p style={{fontSize: '14px', fontWeight: '600' , color: 'gray', marginLeft: '5px'}}>{newLikes > 0 && (newLikes === 1 ? `${newLikes} like` : `${newLikes} likes`)}</p></span> 
            : <span style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}><FavoriteBorderIcon fontSize="small" style={{cursor: 'pointer'}} onClick={likeHandle}/>
            <p style={{fontSize: '14px', fontWeight: '600' , color: 'gray', marginLeft: '5px'}}>{newLikes > 0 && (newLikes === 1 ? `${newLikes} like` : `${newLikes} likes`)}</p></span>}
           
        </React.Fragment>
    )
}

export default PostFooterIcons
