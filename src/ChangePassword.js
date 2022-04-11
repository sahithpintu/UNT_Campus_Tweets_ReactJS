//This component is used for changing the user password

import React from 'react'
import './ChangePassword.css'
import Sidebar from './Sidebar';
import AccessDenied from './AccessDenied';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm} from 'react-hook-form'
import { useHistory } from "react-router";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function ChangePassword() {
    const classes = useStyles();
    const {register, handleSubmit, errors} = useForm()
    const history = useHistory();
  
    const onSubmit = (data) => {
        console.log(data);
        if (data.password !== data.cpassword) {
          alert("Passwords Mismatch. Please verify and try again.");
          return;
        }

        axios.post(`http://localhost:8080/twitter/user/${localStorage.getItem('userName')}/change-password/${data.password}`, data).then(response => {
          console.log(response)
          if(response.data === 'Success') {
            alert("Password changed successfully. Please login with your new credentials.")
            history.push("/logout")
          } else {
            alert(`Error ${response.status}: Unable to change password. Please try again later.`)
          }
        })
    }

    return localStorage.getItem('userName') != null ? (
        <div className="userProfile">
            <Sidebar/>
            <Container component="main" maxWidth="xs" className="registration" style={{ flex: "0.7" }}>
                <CssBaseline />
                <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Change Password
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    inputRef={register({ register: true})}
                    required
                    fullWidth
                    name="password"
                    label="New Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                {errors.password && <span>This field is required</span>}

                    <TextField
                        variant="outlined"
                        margin="normal"
                        inputRef={register({ register: true})}
                        required
                        fullWidth
                        name="cpassword"
                        label="Confirm New Password"
                        type="password"
                        id="cpassword"
                        autoComplete="current-password"
                    />
                    {errors.cpassword && <span>This field is required</span>}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        style={{color:"white", backgroundColor:"#00853e", borderRadius:"50px"}}>
                        Change
                    </Button>
                </form>
                </div>
            </Container>   
        </div>
    ) : (
            <React.Fragment>
                <AccessDenied/>
            </React.Fragment>
            
        )
  }

