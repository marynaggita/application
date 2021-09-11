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
import NavBar from '../Navbar/NavBar1'


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
    marginTop: theme.spacing(1),
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
  button: {
    background: 'red',
    borderRadius: 3,
    border: 0,
    color: 'blue',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
}));

const cards = [
    {
        image: '../../images/img-2.jpg',
        heading: 'Courses in Social inclusion and Gender',
        note: 'Improved access to livelihood access and services for all',
        link: '/SocialInclusionandGender',
        price: '$200',
        time: '/3 weeks',
    }, 
    {
        image: '../../images/img-3.jpg',
        heading: 'Grant Development, writing and Management',
        note: 'Key aspects of developmment, writing and management',
        link: '/GrantDevelopment',
        price: '$400',
        time: '/4 weeks',
        
    },
    {
        image: '../../images/img-4.jpg',
        heading: 'Financial Management',
        note: 'Planning, organizing, controlling and monitoring financial resources.',
        link: '/GrantDevelopment',
        price: '$200',
        time: '/2 weeks',
        
    },
    {
        image: '../../images/img-5.jpg',
        heading: 'Leadership Etiquete and Traction',
        note: 'Qualities of a great leader and the descriptions apply to aspects of etiquette ',
        link: '/LeadershipEtiquette',
        price: '$200',
        time: '/2 weeks',
        
    },
    {
        image: '../../images/img-6.jpg',
        heading: 'Developing Impactful Youth Programs',
        note: 'Several designs of the parameters of the program that engage the youth',
        link: '/ImpactfulYouthPrograms',
        price: '$500',
        time: '/4 weeks',
        
    },
    {
        image: '../../images/img-7.jpg',
        heading: 'Dealing with attitudes and mindsets',
        note: 'Ideas and attitudes that shapes ones way of thinking',
        link: '/DealingwithAttitudeandMindests',
        time: 'varying',
        
    },
    {
        image: '../../images/img-8.jpg',
        heading: 'Mental health',
        note: 'Realities of living with mental health and improve your wellbeing',
        link: '/MentalHealth',
        time: 'varying',
        
    },
    ];

export default function Course() {
  const classes = useStyles();

  return (
    
    <React.Fragment>
      <NavBar />
      <CssBaseline />
      
      <div className={classes.paper}>
        
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
           <Typography variant="h5" align="left" color="textPrimary" paragraph>
              Available courses
            </Typography>
          </Container>
        </div>


        <Container className={classes.cardGrid} maxWidth="md">
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
                    <Typography variant="h6" color="textSecondary">
                      {card.price}    {card.time}
                    </Typography>
                  
                  </CardContent>
                  <CardActions>
                    <Link href={card.link}><Button variant="outlined" size="large" style={{ backgroundColor: '#e3d8d8', color: 'grey'}}>
                      Start course
                    </Button></Link>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}