import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import API from "../../utils/API";
import STORAGE from "../../utils/STORAGE";
import ImageList from "../ImageList/";

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

class PostJobForm extends React.Component {
  state = {
    categories: [],
    value: "",
    files: []
  };

  componentDidMount() {
    API.getCategories()
      .then(res => {
        this.setState({ categories: res.data });
      })
      .catch(err => console.log(err));
  }

  handleSubmit = () => {};

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleRadioChange = event => {
    this.setState({ value: event.target.value });
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

  addImage = e => {
    e.preventDefault();
    if (this.state.files) {
      const files = this.state.files;
      files.push(e.target.files[0]);
      this.setState({ files });
    } else {
      const files = [];
      files.push(e.target.files[0]);
      this.setState({ files });
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
              Post your Job
            </Typography>
            <React.Fragment>
              <Divider className={classes.divider} />
              <Grid container spacing={24}>
                <Grid container item spacing={24} sm={12}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="title"
                      name="title"
                      label="Job Tittle"
                      fullWidth
                      onChange={this.handleChange("title")}
                      value={this.state.title}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="description"
                      name="description"
                      label="Job Description"
                      fullWidth
                      multiline
                      rows={6}
                      onChange={this.handleChange("description")}
                      value={this.lastName}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="billing address-line1"
                    onChange={this.handleChange("address")}
                    value={this.address}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="billing address-level2"
                    onChange={this.handleChange("city")}
                    value={this.city}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    onChange={this.handleChange("state")}
                    value={""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zipCode"
                    name="zipCode"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="billing postal-code"
                    onChange={this.handleChange("zipCode")}
                    value={this.zipCode}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="billing country"
                    onChange={this.handleChange("country")}
                    value={this.country}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phonePersonal"
                    name="phonePersonal"
                    label="Phone number"
                    fullWidth
                    autoComplete="billing Phone number"
                    onChange={this.handleChange("phonePersonal")}
                    value={this.phonePersonal}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="dueDate"
                    name="dueDate"
                    label="Due Date"
                    type="date"
                    fullWidth
                    onChange={this.handleChange("dueDate")}
                    value={this.phonePersonal}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">Category</FormLabel>
                    <RadioGroup
                      aria-label="Category"
                      name="Category"
                      className={classes.group}
                      value={this.state.value}
                      onChange={this.handleRadioChange}
                      row={true}
                    >
                      {this.state.categories.map(element => (
                        <FormControlLabel
                          key={element._id}
                          value={element._id}
                          control={<Radio />}
                          label={element.name}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography variant="h6">Images</Typography>
                  <ImageList
                    files={this.state.files}
                    addImage={this.addImage}
                  />
                </Grid>
              </Grid>
              <Divider className={classes.divider} />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

PostJobForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostJobForm);
