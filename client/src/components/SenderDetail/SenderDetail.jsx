import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";

class SenderDetail extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <Avatar
          alt="Profile Picture"
          src={this.props.person}
          onClick={this.handleClickOpen}
        />
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Jonh Doe"}</DialogTitle>
          <DialogContent>
            <Typography>
              <b>Telephone: </b>
              {"305-486-8989"}
            </Typography>
            <Typography>
              <b>Email: </b>
              {"mybussinesemail@gmail.com"}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

SenderDetail.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(SenderDetail);
