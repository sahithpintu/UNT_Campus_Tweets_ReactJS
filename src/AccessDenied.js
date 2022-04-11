// This component is displayed when an unauthorized user navigates to a page which requires authentication. 

import React from 'react'
import { Button } from '@material-ui/core'

function AccessDenied() {
    return (
        <div className="accessDenied" style={{backgroundColor: ' rgb(21, 32, 43)', height: '100vh'}}>
            <br></br>
            <br></br>
            <div className="errorImage" style={{marginLeft: '35%'}}>
                <img src="https://media.giphy.com/media/kF0ngyP7S1DfmzKqiN/giphy.gif" alt="Login to see Amazing tweets!"/>
            </div>
            <Button variant="outlined" color="primary" href="/twitter/login" style={{marginTop: '30px', marginLeft: '42%'}}>
                Log In to Existing Account
            </Button>     
        </div>
    )
}

export default AccessDenied
