// This component is used for search for posts using keywords and username.

import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';

function Widgets(props) {
    const searchHandler = (event) => {
        let keyword = event.target.value;
        props.parentCallback(keyword)
    }

    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Posts" type="search" onChange={searchHandler}/>
            </div>
        </div>
    )
}

export default Widgets
