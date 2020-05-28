import React from "react";
import { Typography, Grid, GridSpacing } from "@material-ui/core";

import "./Contact.css";

export class Contact extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: "100px" }}>
        <div className="page-title">
          <Typography variant="h1">Contact</Typography>
          <Typography variant="h2">OPTIONS</Typography>
        </div>
        <div className="contact-container">
          <div className="contact-content">
            <Grid container spacing={2}>
              {/* grid style for social and phone */}
              <Grid item xs={6} style={{ textAlign: "left" }}>
                <Typography variant="h3">SOCIAL MEDIA</Typography>
                <div className="contact-text">
                  <Typography>Facebook: @NewAdventuresAwait</Typography>
                  <Typography>Instagram: @NewAdventuresAwait</Typography>
                </div>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "left" }}>
                <Typography variant="h3">PHONE or EMAIL</Typography>
                <div className="contact-text">
                  <Typography>Phone: 1-866-872-8577</Typography>
                  <Typography style={{ fontStyle: "italic", fontSize: "10px" }}>
                    Leave a voicemail with your name and the best time to call
                    you back.
                  </Typography>
                  <Typography>
                    Email: newadventuresawaitforyou@gmail.​com
                  </Typography>
                  <Typography style={{ fontStyle: "italic", fontSize: "10px" }}>
                    Open to inquiries.
                  </Typography>
                </div>
              </Grid>
              {/* center text for hours and location */}
              <Grid item xs={12} style={{ paddingTop: "40px" }}>
                <Typography variant="h3">HOURS of OPERAION</Typography>
                <div className="contact-text">
                  <Typography>
                    Monday - Friday: 9am - 8pm | Saturday: 9am - 2pm | Sunday:
                    Closed
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} style={{ paddingTop: "40px" }}>
                <Typography variant="h3">LOCATION</Typography>
                <div className="contact-text">
                  <Typography>Clackamas, Oregon 97015</Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
