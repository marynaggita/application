import React, { Component, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TextValidator , ValidatorForm} from 'react-material-ui-form-validator';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useDispatch } from "react-redux"
import { red } from '@material-ui/core/colors';


import {connect} from 'react-redux'
import { signIn} from '../../store/actions/authActions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" >
        Global Alternatives Online Platform
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = theme => ({
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'red',
    color: 'white'
  },
  
});


class SignIn extends Component{

  state={
    email: '',
    password: ''
  }
    
 handleChange= e => {
   this.setState({
    [e.target.name]: e.target.value
  })
   };

 handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);

  }


  render(){
    const {classes} = this.props;
    const { authError } = this.props;
    return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper} style={{align:'center'}} >
          
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <ValidatorForm
            className={classes.form} 
            onSubmit={this.handleSubmit}
            onError={errors => {
              for (const err of errors){
                console.log(err.props.errorMessages[0])
              }
            }}
            >
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={this.state.email}
              onChange={this.handleChange} 
              autoComplete="off"
              errorMessages={['This field is required', 'Email is not valid']}
              validators={['required', 'isEmail']}
              autoFocus
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              validators={['required']}
              errorMessages={['This field is required']}
              value={this.state.password}
              onChange={this.handleChange} 
              autoComplete="off"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>  
            <div className = "red-text center">
              { authError ? <p>{authError}</p> : null}
            </div>        
            <Grid container>
            
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </ValidatorForm>
          
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(useStyles) (SignIn) )