// This page displays the current user tweets.

import React, {useState} from 'react'
import './UserProfile.css'
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import AccessDenied from './AccessDenied';
import UserFeed from './UserFeed';

function UserProfile() {

    const [search, setSearch] = useState(null)

    const searchKeywordHandler = (keyword) => {
        setSearch(keyword)
    }

    return localStorage.getItem('userName') != null ? (
        <div className="userProfile">
            <Sidebar/>
            <UserFeed search={search}/>
           
            <Widgets parentCallback={searchKeywordHandler}/>
        </div>
    ) : (
            <React.Fragment>
                <AccessDenied/>
            </React.Fragment>
            
        )
}

export default UserProfile
