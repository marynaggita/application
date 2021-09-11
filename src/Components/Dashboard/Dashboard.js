import React from 'react';
// import Courses from './Components/Courses/index';
import Navbar from '../Navbar/NavBar1';
import Footer from '../Footer/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CourseTest from '../Cards/CardsFullTrial';


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
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));



export default function Dashboard() {
    const classes = useStyles();
    return (
        <React.Fragment>
             <Navbar />
            <CssBaseline />
            {/* <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                <Typography variant="h6" color="red" noWrap>
                Contact us via Email: alternativesglobal@gmail.com  |   Director on +256-782397529
                </Typography>
                </Toolbar>
            </AppBar> */}
            <CssBaseline />
           
            {/* <h5>Welcome </h5>
            <h1>What to expect in this platform</h1>
            <CssBaseline />
            <h3>The Global Online Learning Platform is  a multifaceted space where you can </h3>
            <h4>Take a short course in Leadership and Management, Finance management, Gender, youth, children and social inclusion issues, Entrepreneurship among others.</h4>
            <h4>Get to know about the consultancy and capacity building services offered by a pool of academic and practicing professionals from the fields of Third sector, public, private and academics</h4>
            <h4>Get information about mental health services and products</h4>
              */}
             <CourseTest />
            <Footer />

        </React.Fragment>
        
         
            
        
    )
}

