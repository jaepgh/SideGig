import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
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
    [theme.breakpoints.up(800 + theme.spacing.unit * 2 * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  divider: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 3
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

class SettingsForm extends React.Component {
  state = {
    activeStep: 0,
    checkedB: true,
    categories: [],

    //Personal section
    id_firebase: "",
    file: null,
    imagePreviewUrl: "",
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
    API.getUserInfo(this.props.id_firebase).then(dataUser => {
      this.setState({
        //Personal section
        id_firebase: dataUser.data.id_firebase,
        firstName: dataUser.data.firstName,
        lastName: dataUser.data.lastName,
        imagePreviewUrl: dataUser.data.imagePreviewUrl,
        address: dataUser.data.address.address,
        city: dataUser.data.address.city,
        state: dataUser.data.address.state,
        zipCode: dataUser.data.address.zipCode,
        country: dataUser.data.address.country,
        phonePersonal: dataUser.data.phonePersonal,

        //Profesional section
        profesional: dataUser.data.profesional,
        expertises: dataUser.data.expertises,
        phoneBussiness: dataUser.data.phoneBussiness,
        emailBussiness: dataUser.data.emailBussiness,
        media: dataUser.data.media,
        facebook: dataUser.data.social.facebook,
        instagram: dataUser.data.social.instagram,
        linkedin: dataUser.data.social.linkedin,
        twitter: dataUser.data.social.twitter
      });
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
    });
  }

  handleSubmit = () => {
    const newUser = {
      user: {
        id_firebase: this.state.id_firebase,
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

    API.updateUserInfo(this.state.id_firebase, newUser)
      .then
      //Send a message to the user
      ();
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
        this.state.id_firebase,
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
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Welcome back {this.state.firstName}
            </Typography>
            <React.Fragment>
              <Divider className={classes.divider} />
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
              <Divider className={classes.divider} />
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
              <Divider className={classes.divider} />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                Update
              </Button>
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

SettingsForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SettingsForm);
