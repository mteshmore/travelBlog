import * as React from "react";
import {
  Theme,
  WithStyles,
  AppBar,
  Link,
  Toolbar,
  withStyles,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const styles = (theme: Theme) => ({
  navLink: {
    color: theme.palette.primary.dark,
    fontSize: "14px",
    padding: "2em",
    paddingTop: "3em",
    "&:hover": {
      fontWeight: "bolder",
      textDecoration: "none",
    },
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    zIndex: 2,
    width: "100%",
    alignItems: "center",
  },
});

class Header extends React.Component<WithStyles<typeof styles>> {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Link className={classes.navLink} component={RouterLink} to="/">
            HOME
          </Link>
          <Link
            className={classes.navLink}
            component={RouterLink}
            to="/Countries"
          >
            COUNTRIES
          </Link>
          <Link
            className={classes.navLink}
            component={RouterLink}
            to="/"
          >
            BLOG
          </Link>
          <Link
            className={classes.navLink}
            component={RouterLink}
            to="/"
          >
            NEWS
          </Link>
          <Link
            className={classes.navLink}
            component={RouterLink}
            to="/"
          >
            ABOUT
          </Link>
          <Link
            className={classes.navLink}
            component={RouterLink}
            to="/"
          >
            CONTACT
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
