import * as React from "react";
import { Theme, WithStyles, AppBar, Link, Toolbar, withStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const styles = (theme: Theme) => ({
    navLink: {
      color: "white",
      fontSize: "14px",
      margin: "20px",
      "&:hover": {
        color: theme.palette.primary.main,
        textDecoration: "none",
      },
    },
    appBar: {
      backgroundColor: "none",
    },
  });
  
  class Header extends React.Component<WithStyles<typeof styles>> {
    render() {
      const { classes } = this.props;
  
      return (
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Link className={classes.navLink} component={RouterLink} to="/">
              Home
            </Link>
          </Toolbar>
        </AppBar>
      );
    }
  }
  
  export default withStyles(styles)(Header);