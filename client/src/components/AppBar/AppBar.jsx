import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import AuthBtn from "../../components/AuthBtn";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 90,
    height: 80
  }
};

function ButtonAppBar(props) {
  const { classes, onAuthenticate } = props;
  return (
    <div>
      <div className={classes.row} />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Avatar
              alt="Side Gig"
              src="./logo.png"
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
            <Typography variant="h3" className={classes.grow}>
              SideGig
            </Typography>
            <AuthBtn
              linkMessage="Log In"
              tittle="Welcome back"
              register={false}
              onAuthenticate={onAuthenticate}
            />
            <AuthBtn
              linkMessage="Register"
              tittle="Create your acount"
              register={true}
              onAuthenticate={onAuthenticate}
            />
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
