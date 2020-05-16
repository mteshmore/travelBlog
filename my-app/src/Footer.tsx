import * as React from "react";
// import { Link as RouterLink } from "react-router-dom";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <img
            className="footer-brand"
            src="./images/footer-brand.png"
            alt="brand"
          />
          <div className="footer-copyright">
            @Copyright Adventures Await 2020{" "}
          </div>
        </div>
        <div className="footer-contact">
          {" "}
          <div className="contact footer-title">CONTACT</div>
          <div className="contact email">
            {" "}
            EMAIL: newadventuresawaitforyou@gmail.​com
          </div>
          <div className="contact phone"> PHONE: 1-866-872-8577</div>
          <div className="social-media">
            {" "}
            <FacebookIcon /> <InstagramIcon />{" "}
          </div>
        </div>
        {/* social media icons here */}
      </div>
    );
  }
}

// export default withStyles(styles)(Footer);
