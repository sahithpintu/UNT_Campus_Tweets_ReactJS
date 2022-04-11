// This component is used for user authentication.

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm} from 'react-hook-form'
import { useHistory } from "react-router";
import axios from 'axios'

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

export default function Login() {
  const classes = useStyles();
  const {register, handleSubmit, errors} = useForm()
  const history = useHistory();

  const onSubmit = (data) => {
      console.log(data)
      axios.post("http://localhost:8080/twitter/login", data).then(response => {
          if(response.data === 'Success'){
            localStorage.setItem('userName', data.userName)
            history.push("/twitter")
          }
          else
            alert("Please provide valid details!\nLogin Again or Register")
      })
  }

  return (
    <Container component="main" maxWidth="xs" className="login">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register({ required: true})}
            required
            fullWidth
            id="userName"
            label="Username"
            name="userName"
            // autoComplete="email"
            autoFocus
          />
          {errors.userName && <span>This field is required</span>}
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register({ register: true})}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {errors.password && <span>This field is required</span>}
          <Button style={{color:"white", backgroundColor:"#00853e", borderRadius:"50px"}}
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              
            </Grid>
            <Grid item>
              <Link style={{color:"#00853e"}} href="/twitter/register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}