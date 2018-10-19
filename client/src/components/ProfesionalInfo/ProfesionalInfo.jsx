import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { SocialIcon } from "react-social-icons";

import Button from "@material-ui/core/Button";

function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Professional information
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="primary" name="saveAddress" value="yes" />
            }
            label="I would like to recieve Job Notifications (required if you want to view and accept Jobs)"
          />
        </Grid>
        <Typography variant="h6" gutterBottom>
          Upload Profile photo or avatar
        </Typography>
        <Grid item xs={12}>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
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
              <Checkbox color="primary" name="saveAddress" value="yes" />
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
            id="Facebook"
            name="Facebook"
            label="Facebook"
            fullWidth
            autoComplete="Facebook"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Instagram"
            name="Instagram"
            label="Instagram"
            fullWidth
            autoComplete="Instagram"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Linkedin"
            name="Linkedin"
            label="Linkedin"
            fullWidth
            autoComplete="Linkedin"
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
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;
