import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ImageAvatar from "../ImageAvatar";

const AddressForm = props => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact information
      </Typography>
      <Grid container spacing={24}>
        <Grid container item spacing={24} xs={12} sm={8}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
              onChange={props.onChange("firstName")}
              value={props.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
              onChange={props.onChange("lastName")}
              value={props.lastName}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ImageAvatar
            onSelection={props.onSelection}
            selectedAvatar={props.selectedAvatar}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            autoComplete="billing address-line1"
            onChange={props.onChange("address")}
            value={props.address}
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
            onChange={props.onChange("city")}
            value={props.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            onChange={props.onChange("state")}
            value={props.state}
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
            onChange={props.onChange("zipCode")}
            value={props.zipCode}
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
            onChange={props.onChange("country")}
            value={props.country}
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
            onChange={props.onChange("phonePersonal")}
            value={props.phonePersonal}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
