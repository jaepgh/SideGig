import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { SocialIcon } from "react-social-icons";

const ProfesionalInfo = props => {
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
                checked={props.profesional}
                onChange={props.onChecked("profesional")}
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
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Primary"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Primary"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Primary"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Primary"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Primary"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Primary"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Primary"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Primary"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Business Phone number"
            name="Business Phone number"
            label="Business Phone number (Optional)"
            fullWidth
            autoComplete="billing Phone number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Business Email"
            name="Business Email"
            label="Business Email (Optional)"
            fullWidth
            autoComplete="billing Email"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="media"
                checked={props.media}
                onChange={props.onChecked("media")}
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
            required
            id="facebook"
            name="facebook"
            label="Facebook"
            fullWidth
            autoComplete="Facebook"
            onChange={props.onChange("facebook")}
            value={props.facebook}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="instagram"
            name="instagram"
            label="Instagram"
            fullWidth
            autoComplete="Instagram"
            onChange={props.onChange("instagram")}
            value={props.instagram}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="linkedin"
            name="linkedin"
            label="Linkedin"
            fullWidth
            autoComplete="Linkedin"
            onChange={props.onChange("linkedin")}
            value={props.linkedin}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Twitter"
            name="Twitter"
            label="Twitter"
            fullWidth
            autoComplete="Twitter"
            onChange={props.onChange("twitter")}
            value={props.twitter}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ProfesionalInfo;
