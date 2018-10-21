import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    cursor: "pointer"
  },
  bigAvatar: {
    width: 100,
    height: 100
  },
  input: {
    display: "none"
  }
};

const ImageAvatar = props => {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        type="file"
        onChange={props.onSelection}
      />
      <label htmlFor="outlined-button-file">
        <Avatar
          alt="User Avatar"
          src={props.selectedAvatar}
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
      </label>
    </div>
  );
};

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageAvatar);
