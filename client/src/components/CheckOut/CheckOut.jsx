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
import API from "../../utils/API";
import STORAGE from "../../utils/STORAGE";

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
    categories: [],

    //Personal section
    file: "",
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
    phoneBussiness: "",
    emailBussiness: "",
    media: true,
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: ""
  };
  componentDidMount() {
    API.getCategories()
      .then(res => {
        const categories = res.data;
        if (this.state.expertises)
          categories.forEach(element => {
            if (this.state.expertises.find(e => e === element._id)) {
              element.checked = true;
            } else {
              element.checked = false;
            }
          });
        this.setState({ categories: categories });
      })
      .catch(err => console.log(err));
  }
  handleNext = () => {
    if (this.state.activeStep + 1 === 2) {
      const newUser = {
        user: {
          id_firebase: this.props.id_firebase,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          address: {
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            country: this.state.country
          },
          phonePersonal: this.state.phonePersonal,
          imagePreviewUrl: this.state.imagePreviewUrl,
          profesional: this.state.profesional,
          emailBussiness: this.state.emailBussiness,
          phoneBussiness: this.state.phoneBussiness,

          media: this.state.media,
          social: {
            facebook: this.state.facebook,
            instagram: this.state.instagram,
            linkedin: this.state.linkedin,
            twitter: this.state.twitter
          }
        },
        expertises: this.state.expertises
      };
      API.saveUserInfo(newUser)
        .then(data => {
          if (data) {
            this.props.onRegister(this.state.firstName);
            this.setState(state => ({
              activeStep: state.activeStep + 1
            }));
          }
        })
        .catch(err => console.log(err));
    } else {
      this.setState(state => ({
        activeStep: state.activeStep + 1
      }));
    }
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

  handleExpertisesChange = prop => event => {
    let expertises = [...this.state.expertises];

    if (event.target.checked) {
      //Check
      expertises.push(event.target.value);
      this.state.categories.find(
        e => e._id === event.target.value
      ).checked = true;
    } else {
      //Uncheck
      expertises = expertises.filter(element => element !== event.target.value);
      this.state.categories.find(
        e => e._id === event.target.value
      ).checked = false;
    }

    this.setState({ [prop]: expertises });
  };

  handleSelection = e => {
    e.preventDefault();
    let file = e.target.files[0];

    if (file) {
      this.setState({
        imagePreviewUrl:
          "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
      });
      STORAGE.uploadImage(
        this.props.id_firebase,
        file,
        "avatar",
        imagePreviewUrl => {
          this.setState({
            file: file,
            imagePreviewUrl: imagePreviewUrl
          });
        }
      );
    }

    /* CODE FOR LOCAL READING
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);*/
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
            expertisesChange={this.handleExpertisesChange}
            phoneBussiness={this.state.phoneBussiness}
            emailBussiness={this.state.emailBussiness}
            profesional={this.state.profesional}
            categories={this.state.categories}
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
                  <Typography variant="h5" gutterBottom align="center">
                    Registration Completed Successfully!
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
