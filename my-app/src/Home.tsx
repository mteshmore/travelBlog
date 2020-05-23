import React from "react";

import MobilePanel from "./MobilePanel";

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
    const destinations = [
      {
        label: "DESTINATION ONE",
        imgPath: "./images/destination-1.png",
      },
      {
        label: "DESTINATION TWO",
        imgPath: "./images/destination-2.png",
      },
      {
        label: "DESTINATION THREE",
        imgPath: "./images/destination-3.png",
      },
      {
        label: "DESTINATION FOUR",
        imgPath: "./images/destination-4.png",
      },
    ];

    const news = [
      {
        label: "NEWS ARTICLE ONE",
        imgPath: "./images/news-1.png",
      },
      {
        label: "NEWS ARTICLE TWO",
        imgPath: "./images/news-2.png",
      },
      {
        label: "NEWS ARTICLE THREE LONGER NOW",
        imgPath: "./images/news-3.png",
      },
      {
        label: "NEWS ARTICLE FOUR",
        imgPath: "./images/news-4.png",
      },
      {
        label: "NEWS ARTICLE FIVE",
        imgPath: "./images/news-5.png",
      },
    ];

    const polariodDest = destinations.map((dest, i) => {
      return (
        <div className={"polaroid-destination dest-" + (i % 2)} id={"dest" + i}>
          <img
            className="destination-picture"
            src={dest.imgPath}
            alt={dest.label}
          />{" "}
          <img
            className="destination-divider"
            src="./images/dots.png"
            alt="dots"
          />
          <div className="dest-text" color="textPrimary">{dest.label}</div>
        </div>
      );
    });

    const newsPanel = news.map((article, i) => {
      return (
        <div className="news-block">
          <img className="news-image" src={article.imgPath} alt="news" />
          <div className="news-title-background">
            <div className="news-title">{article.label}</div>
          </div>
        </div>
      );
    });

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
          <div className="mobile-polaroid-chain">
            {" "}
            <MobilePanel data={polariodDest} />{" "}
          </div>
          <div className="polaroid-chain">{polariodDest}</div>
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
          <div className="mobile-news-panel">
            <MobilePanel data={newsPanel} />
          </div>
          <div className="news-panel">
            {newsPanel}
          </div>
        </div>
      </div>
    );
  }
}
