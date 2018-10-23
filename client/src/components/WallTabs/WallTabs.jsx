import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BuildIcon from "@material-ui/icons/Build";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import WorkIcon from "@material-ui/icons/Work";
import Typography from "@material-ui/core/Typography";
import EnhancedTable from "../EnhancedTable";
import NotificationList from "../NotificationList";

const myjobs = [
  {
    id: 1,
    tittle: "Job #1",
    category: "Cat 1",
    location: "Miami, FL",
    price: 100,
    duedate: "10/21/2018"
  },
  {
    id: 2,
    tittle: "Job #2",
    category: "Cat 1",
    location: "Miami, FL",
    price: 100,
    duedate: "10/21/2018"
  },
  {
    id: 3,
    tittle: "Job #3",
    category: "Cat 1",
    location: "Miami, FL",
    price: 100,
    duedate: "10/21/2018"
  },
  {
    id: 4,
    tittle: "Job #4",
    category: "Cat 1",
    location: "Miami, FL",
    price: 100,
    duedate: "10/21/2018"
  }
];

const myposts = [
  {
    id: 1,
    tittle: "Post #1",
    category: "Cat 1",
    location: "Miami, FL",
    price: 100,
    duedate: "10/21/2018"
  },
  {
    id: 2,
    tittle: "Post #2",
    category: "Cat 1",
    location: "Miami, FL",
    price: 100,
    duedate: "10/21/2018"
  },
  {
    id: 3,
    tittle: "Post #3",
    category: "Cat 1",
    location: "Miami, FL",
    price: 100,
    duedate: "10/21/2018"
  }
];

function WallTabs(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

WallTabs.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            fullWidth
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Jobs" icon={<WorkIcon />} />
            <Tab label="Posts" icon={<BuildIcon />} />
            <Tab label="Notifications" icon={<NotificationImportantIcon />} />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <WallTabs>
            <EnhancedTable job={true} data={myjobs} />
          </WallTabs>
        )}
        {value === 1 && (
          <WallTabs>
            <EnhancedTable job={false} data={myposts} />
          </WallTabs>
        )}
        {value === 2 && (
          <WallTabs>
            <NotificationList />
          </WallTabs>
        )}
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonForce);
