import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 90,
    height: 80,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.row}>

      </div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Avatar
              alt="Side Gig"
              src="https://image.shutterstock.com/image-photo/laptop-on-work-table-diy-260nw-271173740.jpg"
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
            <Typography variant="h4" color="inherit" className={classes.grow}>
              Side Gig
          </Typography>
            <Button color="inherit" href="../Login">Login</Button>
            <Button color="inherit" href="../Register">Register</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);