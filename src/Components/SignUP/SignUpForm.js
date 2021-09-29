import React, { Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { Select, MenuItem , InputLabel} from '@material-ui/core';
import { TextValidator , ValidatorForm} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions'; 
import { Redirect } from 'react-router-dom';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Global Alternatives
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'red',
    color: 'white'
  },
  submit1: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'blue',
    color: 'white'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth:390
  },
  danger: {
    color: 'red',
    alignItems: 'center'
  }
});

class SignUpForm extends Component{
   
    state={
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      phone: '',
      age: '',
      date: '',
      gender: ''
    }
    handleChange= e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
     onSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
     }

  render(){
    const { classes,auth,authError } = this.props;
    if (auth.uid) return <Redirect to='/Dashboard'  />
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          
          <Typography component="h1" variant="h5">
            Sign up here to create your account
          </Typography>
          <ValidatorForm 
            className={classes.form} 
            onSubmit={this.onSubmit}
            onError={errors => {
              for (const err of errors){
                console.log(err.props.errorMessages[0])
              }
            }}>
              
                <TextValidator
                  autoComplete="off"
                  name="firstName"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange} 
                  autoFocus
                  validators={['required']}
                  errorMessages={['This field is required']}
                />
                <TextValidator
                  autoComplete="off"
                  name="lastName"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange} 
                  validators={['required']}
                  errorMessages={['This field is required']}
                />
                
              
                
        
                <TextValidator
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  margin="normal"
                  autoComplete="off"
                  value={this.state.email}
                  onChange={this.handleChange} 
                  errorMessages={['This field is required', 'Email is not valid']}
                  validators={['required', 'isEmail']}
                  
                />
                
                <TextValidator
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  margin="normal"
                  autoComplete="off"
                  value={this.state.password}
                  onChange={this.handleChange}  
                  validators={['required']}
                  errorMessages={['This field is required']}
                />
               
                <TextValidator
                  variant="outlined"
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  id="password2"
                  margin="normal"
                  autoComplete="off"
                  value={this.state.password2}
                  onChange={this.handleChange} 
                  validators={['required']}
                  errorMessages={['This field is required']}
                />
                
              <TextValidator
                  variant="outlined"
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="tel"
                  margin="normal"
                  id="phone"
                  autoComplete="off"
                  value={this.state.phone}
                  onChange={this.handleChange} 
                  validators={['required']}
                  errorMessages={['This field is required']} 
                />
                <FormControl className={classes.formControl} component="fieldset" validators={['required']}
                  errorMessages={['This field is required']}  >
                <InputLabel>Age range</InputLabel>
                  <Select name="age"value={this.state.age} onChange={this.handleChange}>
                    <MenuItem value="13-24 years">13-24 years</MenuItem>
                    <MenuItem value="25-35 years">25-35 years</MenuItem>
                    <MenuItem value="36-45 years">36-45 years</MenuItem>
                    <MenuItem value="46-60 years">46-60 years</MenuItem>
                    <MenuItem value="Above 60 years">Above 60 years</MenuItem>
                  </Select>
                </FormControl>
                
                <TextValidator
                  variant="outlined"
                  fullWidth
                  name="date"
                  label="Date of Birth"
                  type="date"
                  margin="normal"
                  id="date"
                  autoComplete="off"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.state.date}
                  onChange={this.handleChange} 
                  
                />
              <FormControl component="fieldset" required>
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup aria-label="gender" name="gender" style={{display:'initial'}} value={this.state.gender} onChange={this.handleChange} >
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                      </RadioGroup>
                 </FormControl>
                            
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I accept the terms and conditions"
                />
              
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              
            >
              Sign Up
            </Button>
            <div className={classes.danger}>
              { authError ? <p>{authError}</p> : null}
            </div> 
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
        
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

 export default connect(mapStateToProps, mapDispatchToProps) (withStyles(useStyles)(SignUpForm))  ; 