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
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Link } from "@reach/router";
import Provider from "./containers/Provider";
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
    <Provider>
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <div />
            <Typography
              variant="title"
              color="inherit"
              noWrap
              style={{ paddingRight: 50 }}
            >
              REACT-REGIONAL EXAMPLES
            </Typography>

            <Button
              variant="contained"
              href="https://github.com/wheatandcat/react-regional"
              style={{ marginLeft: "auto" }}
            >
              GitHub
            </Button>
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
            <Link to="login">
              <ListItem button>
                <ListItemText primary="Login" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="refresh">
              <ListItem button>
                <ListItemText primary="Cache refresh" />
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
    </Provider>
  );
}

const App = withStyles(styles)(ClippedDrawer);

render(<App />, document.getElementById("root"));
