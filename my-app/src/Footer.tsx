import * as React from "react";
// import { Link as RouterLink } from "react-router-dom";

import "./footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-copyright">
          <img
            className="footer-brand"
            src="./images/footer-brand.png"
            alt="brand"
          />
          <div>@Copyright Adventures Await 2020 </div>
        </div>
        <div className="footer-contact">
          {" "}
          <div className="contact footer-title">CONTACT</div>
          <div className="contact email"> EMAIL: newadventuresawaitforyou@gmail.​com</div>
          <div className="contact phone"> PHONE: 1-866-872-8577</div>
        </div>
        {/* social media icons here */}
      </div>
    );
  }
}

// export default withStyles(styles)(Footer);
