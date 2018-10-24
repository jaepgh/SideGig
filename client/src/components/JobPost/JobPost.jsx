import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CurrencyInput from 'react-currency-input';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});





function JobPost() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Post New Job
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Title"  //changed Firstname to Title.
            fullWidth
            autoComplete="fname"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Location" //changed Address to Location.
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="standard-multiline-static"
            label="Job Description"
            multiline
            rows="4"
            defaultValue=""
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-select-currency"
            label="Set Price"
            select
            type=""
            InputLabelProps={{
              shrink: true,
            }} >

            <CurrencyInput
              name="amount"
              prefix="$ "
              decimalSeparator=","
              thousandSeparator="."
            />

          </TextField>
        </Grid>



        <Grid item xs={12} sm={6}>
          <TextField
            id="date"
            label="Need Completed By:"
            type="date"
            defaultValue="2018-01-01"
            InputLabelProps={{
              shrink: true,
            }}
          />

        </Grid>




        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}  // changed from "saveAddress" to "categories"
            label="Electronics"
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}  // changed from "saveAddress" to "categories"
            label="Home & Garden"
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}  // changed from "saveAddress" to "categories"
            label="Auto"
          />
        </Grid>


        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}  // changed from "saveAddress" to "categories"
            label="Personal"
          />


        </Grid>




        <Grid item xs={12}>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span" >
              Upload
       </Button>
          </label>
        </Grid>

      </Grid>



    </React.Fragment>
  );
}



export default withStyles(styles)(JobPost);