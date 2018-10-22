import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CategoryCheckBox = props => {
  return (
    <Grid item xs={12} sm={4}>
      <FormControlLabel
        control={
          <Checkbox
            disabled={props.disabled}
            id={props.id}
            value={props.value}
            color="primary"
            checked={props.ifChecked}
            onChange={props.expertisesChange("expertises")}
          />
        }
        label={props.name}
      />
    </Grid>
  );
};

export default CategoryCheckBox;
