import * as React from "react";
import { Theme, WithStyles, AppBar, Link, Toolbar, withStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const styles = (theme: Theme) => ({
    navLink: {
      color: theme.palette.primary.dark,
      fontSize: "14px",
      margin: "10px",
      "&:hover": {
        fontWeight: "bolder",
        textDecoration: "none",
      },
    },
    appBar: {
      backgroundColor: "transparent",
      boxShadow: "none"
    },
  });
  
  class Header extends React.Component<WithStyles<typeof styles>> {
    render() {
      const { classes } = this.props;
  
      return (
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Link className={classes.navLink} component={RouterLink} to="/">
              HOME
            </Link>
            <Link className={classes.navLink} component={RouterLink} to="/Countries">
              COUNTRIES
            </Link>
          </Toolbar>
        </AppBar>
      );
    }
  }
  
  export default withStyles(styles)(Header);