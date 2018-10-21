import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "../AddressForm";
import ProfessionalInfo from "../ProfesionalInfo";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const steps = ["Contact information", "Professional information"];

class Checkout extends React.Component {
  state = {
    activeStep: 0,
    checkedB: true,
    file: "",

    //Personal section
    imagePreviewUrl: "https://openclipart.org/download/288063/user_upload.svg",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phonePersonal: "",

    //Profesional section
    profesional: true,
    expertises: [],
    media: true,
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: ""
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleCheckedChange = prop => event => {
    this.setState({ [prop]: event.target.checked });
  };

  handleSelection = e => {
    console.log(e.target.files[0].name);
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <AddressForm
            onSelection={this.handleSelection}
            selectedAvatar={this.state.imagePreviewUrl}
            onChange={this.handleChange}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            address={this.state.address}
            city={this.state.city}
            state={this.state.state}
            zipCode={this.state.zipCode}
            country={this.state.country}
            phonePersonal={this.state.phonePersonal}
          />
        );
      case 1:
        return (
          <ProfessionalInfo
            onChange={this.handleChange}
            onChecked={this.handleCheckedChange}
            profesional={this.state.profesional}
            expertises={this.state.expertises}
            media={this.state.media}
            facebook={this.state.facebook}
            instagram={this.state.instagram}
            linkedin={this.state.linkedin}
            twitter={this.state.twitter}
          />
        );

      default:
        throw new Error("Unknown step");
    }
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Registration Steps
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Registration Completed Successfully
                  </Typography>
                  <Typography variant="subtitle1">
                    Thank you for registering with us, please go back to the
                    main page to log in.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Checkout);
