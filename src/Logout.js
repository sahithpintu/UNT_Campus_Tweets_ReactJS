// This component is used to logout the user from the application.

import { Button, Container, CssBaseline, Divider, Typography } from '@material-ui/core'
import React, {useEffect} from 'react'
import { useHistory } from "react-router";

function Logout() {

    const history = useHistory()

    useEffect(() => {
        localStorage.removeItem("userName")
        setTimeout(() => history.push("/twitter/login"), 3000);
    }, [])

    return (

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw" }}>
              <div className="logout">
            <CssBaseline/>
            <Container fixed>
                <Typography component="div" style={{ backgroundColor : '#E9ECEF', height: '30vh', borderRadius: '20px'}}>
                    <Typography variant="h3" gutterBottom style={{ padding: '15px'}}>
                        Successfully Logged Out, Thanks for visiting the application.
                    </Typography>
                    <Divider/>
                   
                </Typography>
            </Container>
            </div>
        </div>
    
    )
}

export default Logout
