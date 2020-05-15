import * as React from "react";
import { Theme, WithStyles, Link, withStyles } from "@material-ui/core";
import { BottomNavigation } from "@material-ui/core";
// import { Link as RouterLink } from "react-router-dom";

const styles = (theme: Theme) => ({
  footerTitle: {
    color: theme.palette.primary.light,
    fontSize: "10px",
    marginTop: "10px",
    marginRight: "200px",
    "&:hover": {
      fontWeight: "bolder",
      textDecoration: "none",
    },
  },
  footer: {
    backgroundColor: theme.palette.secondary.dark,
  },
});

class Footer extends React.Component<WithStyles<typeof styles>> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.footer}>
        <div className={classes.footerTitle}> Adventures AWAIT </div>
        <div className={classes.footerTitle}>
          {" "}
          @Copyright Adventures Await 2020{" "}
        </div>
        <div className={classes.footerTitle}> CONTACT </div>
        <div className={classes.footerTitle}> Email: </div>
        <div className={classes.footerTitle}> Phone: </div>
        {/* social media icons here */}
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
