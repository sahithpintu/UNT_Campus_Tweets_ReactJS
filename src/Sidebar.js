// This component allows the user to navigate around the application

import React, {useState} from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button, makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import TweetBox from './TweetBox';
import { useHistory } from "react-router";
import { VpnKeyRounded } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    dialogWrapper : {
        position: 'absolute',
        top: theme.spacing(5)
    }
}))


function Sidebar() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles()
    const history = useHistory()
    const currentUserName = localStorage.getItem('userName')

    return (
        <div className="sidebar">
            <img className="sidebar__twitterIcon" src="/logo.jpeg" alt="UNT" style={{ height: "56px" }} onClick={() => history.push("/twitter")} />


            <SidebarOption Icon={HomeIcon} text="Home" handler={() => history.push("/twitter")}/>
          
            <SidebarOption Icon={PermIdentityIcon} text="Profile" handler={() => history.push(`/twitter/user`)} />
            
            <SidebarOption Icon={PermIdentityIcon} text="My Tweets" handler={() => history.push(`/twitter/user/${currentUserName}`)} />
            
            <SidebarOption Icon={VpnKeyRounded} text="Change Password" handler={() => {
                history.push(`/twitter/user/${currentUserName}/change-password`)
            }}/>

            <SidebarOption Icon={ExitToAppIcon} text="Logout" handler={() => {
                history.push("/logout")
            }}/>

            <Button variant="outlined" className="sidebar__tweet" fullWidth onClick={handleClickOpen}>Post</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" fullWidth={true} classes = {{paper : classes.dialogWrapper}}>
                <DialogTitle>
                    <div className="dialogTitle__close">
                        <CloseIcon onClick={handleClose}/>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    <TweetBox setOpenPopup={setOpen}/>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default Sidebar
