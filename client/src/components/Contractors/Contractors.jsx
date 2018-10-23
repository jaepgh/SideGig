import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AuthBtn from "../../components/AuthBtn";


const styles = theme => ({
  root: {
    maxWidth: 1300,
    marginBottom: 30,
    marginTop: 50,
    backgroundColor: theme.palette.background.paper,
    maxWidth: 1300,
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  media: {
    height: 300,
  },
});

function getSteps() {
  return ['Create accounts', 'Find Gigs', 'Connect people'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Let Contractors create accounts to give them access to Side Gig.';
    case 1:
      return 'Let Contractors find Gigs posted by Users.';
    case 2:
      return 'Connect Contractors with Users to get the Gigs done.';
    default:
      return 'Uknown stepIndex';
  }
}

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes, onAuthenticate } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
      <List component="nav">
      <ListItem button>
      <Grid container spacing={24}>
          <Grid item xs={1}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}></Paper>
            <CardMedia
          className={classes.media}
          image="https://constructionreviewonline.com/wp-content/uploads/2017/06/contractor.jpg" alt="Image result for tools"
          title="Contemplative Reptile"
        />
          </Grid>
          <Grid item xs={5}>
            <Typography component="h4" variant="h4" gutterBottom>
              "Contractors"
      </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>Now sign up and get some Gigs</Typography>
              <AuthBtn
              linkMessage="Register" 
              tittle="Create your acount"
              variant="contained"
              color="primary"
              register={true}
              onAuthenticate={onAuthenticate}
            />
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
        </Grid>
          
          </Grid>
          </ListItem>
        </List>
      </div>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);