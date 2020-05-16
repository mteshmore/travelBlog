import React from "react";

import "./Home.css";
import { Theme, WithStyles, withStyles, Typography } from "@material-ui/core";

interface MyProps {
  // adding a ? makes the props optional
  message?: string;
}
interface MyState {
  count: number;
}

export class Home extends React.Component {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <div>
        <div className="site-title"> </div>
        <div className="timeline">
          <Typography variant="h1">Plan your adventure with us!</Typography>
          <div>
            <img
              src="./images/home-timeline.png"
              alt="plan-trip-timeline"
              className="timeline-graphic"
            />
          </div>
          <div className="timeline-text">
            <Typography className="timeline-text-box" color="textPrimary">
              EXPLORE
            </Typography>
            <Typography className="timeline-text-box" color="textPrimary">
              CONTACT
            </Typography>
            <Typography className="timeline-text-box" color="textPrimary">
              RESERVE
            </Typography>
            <Typography className="timeline-text-box" color="textPrimary">
              TAKE-OFF
            </Typography>
          </div>
        </div>
        <div className="destinations">
          <Typography variant="h1">Explore by Destinations</Typography>
          <div className="polaroid-chain">
            <div className="polaroid-destination">
              <img
                className="destination-picture"
                src="./images/destination-1.png"
                alt="destinations"
              />{" "}
              <img
                className="destination-divider"
                src="./images/dots.png"
                alt="dots"
              />
              <Typography color="textPrimary"> DESTINATION ONE</Typography>
            </div>
            <div className="polaroid-destination-2">
              <img
                className="destination-picture"
                src="./images/destination-2.png"
                alt="destinations"
              />{" "}
              <img
                className="destination-divider"
                src="./images/dots.png"
                alt="dots"
              />
              <Typography color="textPrimary"> DESTINATION TWO</Typography>
            </div>
            <div className="polaroid-destination">
              <img
                className="destination-picture"
                src="./images/destination-3.png"
                alt="destinations"
              />{" "}
              <img
                className="destination-divider"
                src="./images/dots.png"
                alt="dots"
              />
              <Typography color="textPrimary"> DESTINATION THRE</Typography>
            </div>
            <div className="polaroid-destination-2">
              <img
                className="destination-picture"
                src="./images/destination-4.png"
                alt="destinations"
              />{" "}
              <img
                className="destination-divider"
                src="./images/dots.png"
                alt="dots"
              />
              <Typography color="textPrimary"> DESTINATION FOUR</Typography>
            </div>
          </div>
        </div>
        <div className="announcements">
          {/* <Typography variant="h1">Explore with our Podcasts</Typography> */}
          <img
            className="announcement-picture"
            src="./images/announcement-postcard.png"
            alt="announcements"
          />{" "}
        </div>
        <div className="blogs">
          <Typography className="home-undlerined" variant="h1">
            Explore from our Blogs
          </Typography>
          <img className="blog-picture" src="./images/blog.png" alt="blog" />{" "}
        </div>
        <div className="news">
          <Typography variant="h1">Explore through News</Typography>
          <div className="news-panel">
            <div className="news-block">
              <img
                className="news-image"
                src="./images/news-1.png"
                alt="news"
              />
              <div className="news-title">NEWS <br/>ARTICLE <br/>TWO</div>
            </div>
            <div className="news-block">
            <img
                className="news-image"
                src="./images/news-2.png"
                alt="news"
              />
              <div className="news-title">NEWS <br/>ARTICLE <br/>THREE</div>
            </div>
            <div className="news-block">
            <img
                className="news-image"
                src="./images/news-3.png"
                alt="news"
              />
              <div className="news-title">NEWS <br/>ARTICLE <br/>FOUR</div>
            </div>
            <div className="news-block">
            <img
                className="news-image"
                src="./images/news-4.png"
                alt="news"
              />
              <div className="news-title">NEWS <br/>ARTICLE <br/>FIVE</div>
            </div>
            <div className="news-block">
            <img
                className="news-image"
                src="./images/news-5.png"
                alt="news"
              />
              <div className="news-title">NEWS <br/>ARTICLE <br/>ONE</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
