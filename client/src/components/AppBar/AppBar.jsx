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
    flexGrow: 1,
    position: "relative"
    
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  row: {
    display: "flex",
    justifyContent: "center",
    position: "relative"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 50,
    height: 50
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
            <Typography variant="h3" color="inherit" className={classes.grow}>
              SideGig
            </Typography>
            <AuthBtn
              linkMessage="Log In"
              
              color="inherit"
              tittle="Welcome back"
              register={false}
              onAuthenticate={onAuthenticate}
            />
            <AuthBtn
              linkMessage="Register" 
              
              color="inherit"
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
