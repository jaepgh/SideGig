import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AuthBtn from "../../components/AuthBtn";

const styles = theme => ({
  root: {
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: theme.palette.background.paper,
    maxWidth: 1300,
    
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
    
  },
  media: {
    height: 340,
    
    
  },
});

function getSteps() {
  return ['Create accounts', 'Show Gigs', 'Connect people'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Let Users create accounts to 
              give them access to Side Gig.`;
    case 1:
      return 'Let Users post Gigs so Contractors car see them.';
    case 2:
      return `Connect Users and Contractors to get the Gigs done.`;
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
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
          <Grid item xs={5}>
            <Typography component="h4" variant="h4" gutterBottom>
              "Users"
      </Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                      <Typography>{getStepContent(index)}</Typography>
                      <div className={classes.actionsContainer}>
                        <div>
                          <Button
                            disabled={activeStep === 0}
                            onClick={this.handleBack}
                            className={classes.button}
                          >
                            Back
                      </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            
                          </Button>
                        </div>
                      </div>
                    </StepContent>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>Now sign up and post some Gigs</Typography>
            <AuthBtn
              linkMessage="Register" 
              tittle="Create your acount"
              variant="contained"
              color="primary"
              register={true}
              onAuthenticate={onAuthenticate}
            />
            <Button onClick={this.handleReset} className={classes.button}>
                  Back to top
            </Button>
              </Paper>
            )}
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}></Paper>
            <CardMedia
          className={classes.media}
          image="https://mtn-s3.imgix.net/wp-content/uploads/5-Reasons-to-Refinance.jpg?auto=format%2Ccompress%2Cenhance&amp;ixlib=php-1.1.0&amp;w=700&amp;s=2ed39842af6edbd880337e43fede3cf4" alt="Image result for tools"
          title="Contemplative Reptile"
        />
          </Grid>
        </Grid>
        </ListItem>
        </List>
        <Divider />
        
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);