import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    
  },
  toolbar: {
    flexWrap: 'wrap',
    color: 'red',
  },
  toolbarTitle: {
    flexGrow: 1,
  }

}));



export default function Appbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6"  noWrap className={classes.toolbarTitle}>
          Contact us on +256 782397529   or Email us at alternativesglobal@gmail.com
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}