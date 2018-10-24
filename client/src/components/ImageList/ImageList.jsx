import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import AddIcon from "@material-ui/icons/AddCircle";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    height: 200,
    borderStyle: "solid"
  },
  input: {
    display: "none"
  },
  button: {
    margin: theme.spacing.unit,
    cursor: "pointer"
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class FolderList extends React.Component {
  state = {
    checked: []
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={10}>
          <List className={classes.root}>
            {this.props.files ? (
              this.props.files.map(value => (
                <ListItem key={value.name} dense button>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary={value.name} />
                </ListItem>
              ))
            ) : (
              <React.Fragment />
            )}
          </List>
        </Grid>
        <Grid item xs={2}>
          <input
            accept="image/*"
            className={classes.input}
            id="outlined-button-file"
            type="file"
            onChange={this.props.addImage}
          />
          <label htmlFor="outlined-button-file">
            <AddIcon className={classes.button} />
          </label>
        </Grid>
      </Grid>
    );
  }
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FolderList);
