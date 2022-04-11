// This page allows the users to sign up to the application.

import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
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
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Registration() {
  const classes = useStyles();
  const {register, handleSubmit, errors} = useForm()
  const history = useHistory();

  const onSubmit = (data) => {
      console.log(data)
      if (!data.emailId.toLowerCase().endsWith("@my.unt.edu")) {
        alert("Enter your University Mail ID")
        return;
      }
      axios.post("http://localhost:8080/twitter/register", data).then(response => {
        console.log(response)
        if(response.data === 'Success')
            history.push("/twitter/login")
        else
            alert("Please provide valid details!\nRegister Again.")
      })
  }

  return (
    <Container component="main" maxWidth="xs" className="registration">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Create a new account
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
            variant="outlined"
            margin="normal"
            inputRef={register({ required: true})}
            required
            fullWidth
            id="displayName"
            label="Display Name"
            name="displayName"
            autoFocus
          />
          {errors.displayName && <span>This field is required</span>}

        
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register({ required: true})}
            required
            fullWidth
            id="userName"
            label="Username"
            name="userName"
          />
          {errors.userName && <span>This field is required</span>}
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register({ required: true})}
            required
            fullWidth
            id="emailId"
            label="Email ID"
            type="email"
            name="emailId"
            autoComplete="email"
          />
          {errors.emailId && <span>This field is required</span>}
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
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link style={{color:"#00853e"}} href="/twitter/login" variant="body2">
                Log In to Existing Account
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}