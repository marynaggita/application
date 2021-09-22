import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(12, 0, 4),
    justifyContent: 'left',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    

  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
  },
  cardMedia: {
    paddingTop: '66.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
    {
        image: '../../images/img-2.jpg',
        heading: 'Courses in Social inclusion and Gender',
        note: 'Improved access to livelihood access and services for all',

    }, 
    {
        image: '../../images/img-3.jpg',
        heading: 'Grant Development, writing and Management',
        note: 'Key aspects of developmment, writing and management',
        
    },
    {
        image: '../../images/img-4.jpg',
        heading: 'Financial Management',
        note: 'Planning, organizing, controlling and monitoring financial resources.',
        
    },
    // {
    //     image: '../../images/img-5.jpg',
    //     title: 'saaa',
    //     heading: 'Leadership Etiquete and Traction',
    //     note: 'xxxx',
        
    // },
    // {
    //     image: '../../images/img-6.jpg',
    //     title: 'yyyy',
    //     heading: 'Developing Impactful Youth Programs',
    //     note: 'vbbb',
        
    // },
    // {
    //     image: '../../images/img-7.jpg',
    //     title: 'vvvvv',
    //     heading: 'Dealing with attitudes and mindsets',
    //     note: 'vnn',
        
    // },
    // {
    //     image: '../../images/img-8.jpg',
    //     title: 'yyyyy',
    //     heading: 'Mental health',
    //     note: 'fg',
        
    // },
    ];

export default function CardTest() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <div className={classes.paper}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            {/* <Typography component="h2" variant="h4" align="left" color="textPrimary" gutterBottom>
              Album layout
            </Typography> */}
            <Typography variant="h5" align="left" color="textPrimary" paragraph>
              Some of the available courses
            </Typography>
          </Container>
        </div>


        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}                   
                  />
                  <CardContent className={classes.cardContent} >
                    <Typography 
                        gutterBottom 
                        variant="h7" 
                        component="h3"
                        >
                        {card.heading}
                    </Typography>
                    <Typography variant="inherit">
                    {card.note}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}