import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Link } from "@reach/router";
import Router from "./Router";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0
  },
  toolbar: theme.mixins.toolbar
});

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            example
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <div className={classes.toolbar} />
        <List component="nav">
          <Link to="/users">
            <ListItem button>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/users/new">
            <ListItem button>
              <ListItemText primary="Create User" />
            </ListItem>
          </Link>
          <Divider />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router />
      </main>
    </div>
  );
}

const App = withStyles(styles)(ClippedDrawer);

render(<App />, document.getElementById("root"));
