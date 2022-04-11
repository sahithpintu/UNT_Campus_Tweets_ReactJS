//This page allows the users to view and edit their profile details.

import React, { useState, useEffect } from 'react'
import './ChangePassword.css'
import Sidebar from './Sidebar';
import AccessDenied from './AccessDenied';
import Loading from './Loading';
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
  
  export default function Profile() {
    const classes = useStyles();
    const {register, handleSubmit, errors} = useForm()
    const [profile, setProfile] = useState([])
    const history = useHistory();
    
    useEffect(() => {
      if (localStorage.getItem('userName') == null) {
        return;
      }

      axios.get(`http://localhost:8080/twitter/user/${localStorage.getItem('userName')}`)
      .then((response) => {
          console.log(response)
          console.log(response.data)
          document.getElementById("name").value = response.data.displayName;
          document.getElementById("username").value = response.data.userName;
          document.getElementById("email").value = response.data.emailId;
          setProfile(response.data)
      })
    }, [])

    const onSubmit = (data) => {
        console.log(data);
        axios.post(`http://localhost:8080/twitter/user/${localStorage.getItem('userName')}/edit-profile/${data.name}/${data.email}`, data).then(response => {
          console.log(response)
          if(response.data === 'Success') {
            alert("Profile updated successfully")
          } else {
            alert(`Error ${response.status}: Unable to update profile. Please try again later.`)
          }
        })
    }

    return localStorage.getItem('userName') != null ? (
      profile ?
        (<div className="userProfile">
            <Sidebar/>
            <Container component="main" maxWidth="xs" className="registration" style={{ flex: "0.7" }}>
                <CssBaseline />
                <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Your Profile
                </Typography>
                <br></br>

                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                  <div style={{ display: "flex", width: "500px", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                    <div style={{ flex: "0.3"}}>Username</div>
                    <TextField
                      style={{ flex: "0.7"}}
                      variant="standard"
                      inputRef={register({ register: true })}
                      required
                      fullWidth
                      name="username"
                      id="username"
                      disabled />
                  </div>
                  <br></br>

                  <div style={{ display: "flex", width: "500px", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <div style={{ flex: "0.3", marginRight: "10px" }}>Display Name</div>
                    <TextField
                      style={{ flex: "0.7" }}
                      variant="standard"
                      inputRef={register({ register: true })}
                      required
                      fullWidth
                      name="name"
                      id="name"
                  />
                  {errors.name && <span>This field is required</span>}
                  </div>
                  <br></br>

                  <div style={{ display: "flex", width: "500px", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <div style={{ flex: "0.3", marginRight: "10px" }}>Email</div>
                    <TextField
                      style={{ flex: "0.7" }}
                      variant="standard"
                      inputRef={register({ register: true })}
                      required
                      fullWidth
                      name="email"
                      id="email"
                  />
                  {errors.email && <span>This field is required</span>}
                  </div>
                  <br></br>
                  
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                      style={{color:"white", backgroundColor:"#00853e", borderRadius:"50px"}}>
                      Save
                  </Button>
                </form>
                </div>
            </Container>   
        </div>)
      : (
        <React.Fragment>
          <Loading/>
        </React.Fragment>
      )
    ) : (
          <React.Fragment>
              <AccessDenied/>
          </React.Fragment>
        )
  }

