import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import { SocialIcon } from "react-social-icons";
import CategoryCheckBox from "../CategoryCheckBox";
import API from "../../utils/API";

class ProfesionalInfo extends Component {
  state = { categories: [] };
  componentDidMount() {
    API.getCategories()
      .then(res => {
        this.setState({ categories: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Professional information
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="profesional"
                  checked={this.props.profesional}
                  onChange={this.props.onChecked("profesional")}
                />
              }
              label="I would like to recieve Job Notifications (required if you want to view and accept Jobs)"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Areas of Expertise:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormGroup row>
              {this.state.categories.map(element => (
                <CategoryCheckBox
                  disabled={!this.props.profesional}
                  id={element._id}
                  value={element._id}
                  name={element.name}
                  expertisesChange={this.props.expertisesChange}
                />
              ))}
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              disabled={!this.props.profesional}
              id="phoneBussiness"
              name="phoneBussiness"
              label="Business Phone number"
              fullWidth
              autoComplete="billing Phone number"
              onChange={this.props.onChange("phoneBussiness")}
              value={this.props.phoneBussiness}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              disabled={!this.props.profesional}
              id="emailBussiness"
              name="emailBussiness"
              label="Business Email"
              fullWidth
              autoComplete="billing Email"
              onChange={this.props.onChange("emailBussiness")}
              value={this.props.emailBussiness}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  disabled={!this.props.profesional}
                  color="primary"
                  name="media"
                  checked={this.props.media}
                  onChange={this.props.onChecked("media")}
                />
              }
              label="Show Social Media on Profile"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <SocialIcon network="facebook" style={{ height: 50, width: 50 }} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <SocialIcon network="instagram" style={{ height: 50, width: 50 }} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <SocialIcon network="linkedin" style={{ height: 50, width: 50 }} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <SocialIcon network="twitter" style={{ height: 50, width: 50 }} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              disabled={!this.props.profesional || !this.props.media}
              id="facebook"
              name="facebook"
              label="Facebook"
              fullWidth
              autoComplete="Facebook"
              onChange={this.props.onChange("facebook")}
              value={this.props.facebook}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              disabled={!this.props.profesional || !this.props.media}
              id="instagram"
              name="instagram"
              label="Instagram"
              fullWidth
              autoComplete="Instagram"
              onChange={this.props.onChange("instagram")}
              value={this.props.instagram}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              disabled={!this.props.profesional || !this.props.media}
              id="linkedin"
              name="linkedin"
              label="Linkedin"
              fullWidth
              autoComplete="Linkedin"
              onChange={this.props.onChange("linkedin")}
              value={this.props.linkedin}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              disabled={!this.props.profesional || !this.props.media}
              id="Twitter"
              name="Twitter"
              label="Twitter"
              fullWidth
              autoComplete="Twitter"
              onChange={this.props.onChange("twitter")}
              value={this.props.twitter}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ProfesionalInfo;
