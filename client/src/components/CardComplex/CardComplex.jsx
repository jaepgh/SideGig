import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import classNames from 'classnames';
import MobileStepper from '@material-ui/core/MobileStepper';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Bicycle - Hialeah, United States',
    imgPath:
      'http://2.bp.blogspot.com/-P1ZyYHtv5tQ/U8XbGGJH6mI/AAAAAAAADLw/CymVz8rV3Es/s1600/000_DV1821303-659x440.jpg',
  },
  {
    label: 'Bicycle - Hialeah, United States',
    imgPath:
      'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/2/2017/05/peter-koning-broken-bike.png',
  },
  {
    label: 'Bicycle - Hialeah, United States',
    imgPath:
      'https://www.knoxmercury.com/wp-content/uploads/2017/01/COVER_0112_DreamBikes1-793x529.jpg',
  },
  
    
];

const styles = theme => ({
  card: {
    maxWidth: 500,
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 500,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 600,
    overflow: 'hidden',
    width: '100%',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  bigAvatar: {
    width: 60,
    height: 50,
  },
  root: {
    maxWidth: 1300,
    flexGrow: 1,
    marginTop: 30,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 2fr)',
    gridGap: `${theme.spacing.unit * 6}px`,
  },

});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;



    return (
      <Card className={classes.card}>
        <Paper className={classes.paper}></Paper>
        <Paper square elevation={0} className={classes.header}>
          <Paper className={classes.paper}></Paper>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
        <Toolbar>
          <Avatar
            alt="Side Gig"
            src="https://image.shutterstock.com/image-photo/laptop-on-work-table-diy-260nw-271173740.jpg"
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <Typography variant="h5" color="inherit" className={classes.grow}>
            Fix My Bicycle
          </Typography>

        </Toolbar>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            100 $$
          </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            1 Week
          </Typography>
          </Grid>
        </Grid>
        
        <CardActions className={classes.actions} disableActionSpacing>
        <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
        
        <Button size="small" >
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          
          </Grid>
          <Grid item xs={12} sm={4}>
          <Button size="small">
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
          <IconButton
            className={classNames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          </Grid>
          </Grid>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            Description
          </Typography>
           <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
              chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
              salt and pepper, and cook, stirring often until thickened and fragrant, about 10
              minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
              to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
            
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);