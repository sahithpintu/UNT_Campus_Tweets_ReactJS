//This component is used as a placeholder when loading asynchronus resources.

import React from 'react'
import { Typography } from '@material-ui/core'

export default function Loading(text) {
    return (
        <div className="accessDenied" style={{backgroundColor: ' rgb(21, 32, 43)', height: '100vh'}}>
            <br></br>
            <br></br>
            <Typography component="h6" variant="h5">
                {text}
            </Typography>
        </div>
    )
}
