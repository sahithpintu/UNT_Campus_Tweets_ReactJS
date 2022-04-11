// This component displays the home page of the application.

import React, {useState} from 'react'
import './Home.css'
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import AccessDenied from './AccessDenied';

function Home() {

    const [search, setSearch] = useState(null)

    const searchKeywordHandler = (keyword) => {
        setSearch(keyword)
    }

    return localStorage.getItem('userName') != null ? (
        <div className="home">
            <Sidebar/>
            <Feed search={search}/>
            <Widgets parentCallback={searchKeywordHandler}/>
        </div>
    ) : (
                <React.Fragment>
                    <AccessDenied/>
                </React.Fragment>
        )
}

export default Home
