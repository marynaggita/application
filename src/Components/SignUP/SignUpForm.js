import React, {useState, useEffect} from 'react';
import validationInfo from './validateInfo';
import SignIn from "../login/signinForm";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { Select, MenuItem , InputLabel} from '@material-ui/core';

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth:390
  }
}));

export default function SignUpForm({submitForm}) {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        phone: '',
        age: '',
        date: '',
        gender: ''
     })
     const [errors, setErrors] = useState({});
     const [dataCorrect, setDataCorrect] = useState(false);

     const handleChange= e => {
      const { name, value} = e.target;
      setValues ({
          ...values,
          [name]: value
      });
     };

     const onSubmit = e => {
         e.preventDefault();
         setErrors(validationInfo(values));
         setDataCorrect(true);
         
     };
     useEffect(() => {
       if(Object.keys(errors).length === 0 && dataCorrect)
       submitForm(true);       
     }, [errors])

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Sign up here to create your account
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleChange} 
                autoFocus
              />
              {errors.firstName && <p className="errors">{errors.firstName}</p>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={values.lastName}
                onChange={handleChange} 
              />
              {errors.lastName && <p className="errors">{errors.lastName}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange} 
              />
              {errors.email && <p className="errors">{errors.email}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange}  
              />
              {errors.password && <p className="errors">{errors.password}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Confirm Password"
                type="password"
                id="password2"
                autoComplete="current-password"
                value={values.password2}
                onChange={handleChange} 
              />
              {errors.password2 && <p className="errors">{errors.password2}</p>}
            </Grid>
              <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone"
                type="tel"
                id="phone"
                autoComplete="tel"
                value={values.phone}
                onChange={handleChange}  
              />
              {errors.phone && <p className="errors">{errors.phone}</p>}
            </Grid>
                        
            <Grid item xs={12}>
              <FormControl className={classes.formControl} component="fieldset" required >
              <InputLabel>Age range</InputLabel>
                <Select name="age"value={values.value} onChange={handleChange}>
                  <MenuItem value="13-24 years">13-24 years</MenuItem>
                  <MenuItem value="25-35 years">25-35 years</MenuItem>
                  <MenuItem value="36-45 years">36-45 years</MenuItem>
                  <MenuItem value="46-60 years">46-60 years</MenuItem>
                  <MenuItem value="Above 60 years">Above 60 years</MenuItem>
                </Select>
              </FormControl>
              {errors.age && <p color='red' className="errors">{errors.age}</p>}
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="date"
                label="Date of Birth"
                type="date"
                id="date"
                autoComplete="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={values.date}
                onChange={handleChange} 
              />
            </Grid>

            <Grid item xs={12}>
            <FormControl component="fieldset" required>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" style={{display:'initial'}} value={values.value} onChange={handleChange} >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
               </FormControl>
               {errors.gender && <p color='red' className="errors">{errors.gender}</p>}
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I accept the terms and conditions"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            onClick={onSubmit}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/SignIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}