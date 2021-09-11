import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Navbar } from 'react-bootstrap';
import { MuiThemeProvider } from 'material-ui/styles';
import img from "../../images/Online.jpg"
import { red } from '@material-ui/core/colors';
import { Button } from '../../globalStyles';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxheight: '80vh',
    marginBottom: '100px'
    
    // justifyContent: 'center',
},
  
  image: {
    backgroundImage: 'url(../../images/img-7.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: '80%',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  maintext: {
    marginTop: '10px',
    fontSize:'40px',
    padding: '0, 15px',
    // marginBottom: '10px',
    fontWeight: '700',
    color: 'red'
  },
  subtext: {
    // marginTop: '30px',
    fontSize: '22px',
    fontWeight: '500',
    marginBottom: '50px'
  },
  
}));


export default function InfoSection2() {
  const classes = useStyles();

  return (
    <Grid container  className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <div className={classes.maintext}>
          <span>AnswerYo App Services.</span>
          </div>
          <div className={classes.subtext}>Get information about mental health services and products and this will boost your knowledge about keeping a sound mind. </div>
          <Link href="/SignUpForm"><Button>
            CLICK TO START
          </Button></Link>
          <Grid item xs={12} sm={12} md={6} className={classes.image} />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.image} />
    </Grid>
   
  );
}