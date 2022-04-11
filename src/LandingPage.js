// This component is the landing page of the application.

import React from 'react'
import { Button, Container, CssBaseline, Divider, Typography } from '@material-ui/core'

function LandingPage() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw" }}>
            <div className="landingPage" style={{ width: "80%", height: "40%" }}>
                <CssBaseline/>
                <Container fixed>
                    <Typography component="div" style={{ backgroundColor : '#00853E', borderRadius: '20px'}}>
                        <Container fixed style={{ padding: "20px"}}>
                            <br></br>
                            <Typography variant="h4" style={{color: "white", textAlign: 'center'}}>
                                Welcome to UNT Campus Tweets!
                            </Typography>
                            <Typography variant="h6" style={{ color: "white", textAlign: 'center'}}>
                            Connect with your fellow Eagles!
                            </Typography>
                            <br></br>
                        </Container>
                    
                        <Divider/>
                        <div style={{
                            display: "flex",
                            width: "100%",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "20px"
                        }}>
                            <Button variant="contained" color="primary" href="/twitter/register" style={{
                                fontWeight: "bold", backgroundColor: "white", color: "black", marginRight: '10px'
                            }}>
                                Sign up
                            </Button>
                            <Button variant="contained" color="primary" href="/twitter/login" style={{
                                fontWeight: "bold", backgroundColor: "white", color: "black"
                            }}>
                                Log in
                            </Button>
                        </div>
                    </Typography>
                </Container>
            </div>
        </div>
    )
}

export default LandingPage
