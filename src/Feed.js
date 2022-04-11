//This component is used to display all users tweets.

import React, { useState, useEffect } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import FlipMove from 'react-flip-move'
import axios from 'axios'
import { useHistory } from "react-router";

function Feed({search}) {

    const [tweets, setTweets] = useState([])
    const history = useHistory()

    useEffect(() => {
        axios.get("http://localhost:8080/twitter/tweets")
        .then((response) => {
            console.log(response)
            console.log(response.data)
            setTweets(response.data)
        })
        //console.log(search+",,,,,,,,,,,,,,")
    }, [])

    return (
        <div className="feed">
            <div className="feed__header" onClick={() => {
                history.push("/twitter")
            }}>
                <h2>Home</h2>

                
            </div>

            <TweetBox setOpenPopup={function() {
                console.log("SetOpenPopup Called");
            }}/>

            <FlipMove>
                {tweets.filter((tweet) => {
                    if(search == null)
                        return tweet
                    else if(tweet.userName.toLowerCase().includes(search.toLowerCase()) || tweet.tweetBody.toLowerCase().includes(search.toLowerCase()))
                        return tweet
                    else
                        return null
                }).map(tweet =>
                    <Post
                        key={tweet.tweetId}
                        displayName={tweet.displayName}
                        username={tweet.userName}
                        verified={tweet.verified}
                        text={tweet.tweetBody}
                        image={tweet.tweetImage}
                        avatar={tweet.avatar}
                        tweetCreationTime={tweet.tweetCreationTime}
                        isPostFooterIcon={true}
                        tweetId={tweet.tweetId}
                        likes={tweet.likes}
                    /> 
                )} 
                
            </FlipMove>

        </div>
    )
}

export default Feed
