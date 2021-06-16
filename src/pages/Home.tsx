import React from "react";

import NewsPanel from "../components/NewsPanel";
import PolaroidChain from "../components/PolaroidChain";

import "./Home.css";
import { Theme, WithStyles, withStyles, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MyProps {
  // adding a ? makes the props optional
  message?: string;
}
interface MyState {
  count: number;
}

export class Home extends React.Component {
  render() {
    const destinations = [
      {
        label: "DESTINATION ONE",
        imgPath: "../images/destination-1.png",
      },
      {
        label: "DESTINATION TWO",
        imgPath: "../images/destination-2.png",
      },
      {
        label: "DESTINATION THREE",
        imgPath: "../images/destination-3.png",
      },
      {
        label: "DESTINATION FOUR",
        imgPath: "../images/destination-4.png",
      },
    ];

    const news = [
      {
        label: "NEWS ARTICLE ONE",
        imgPath: "../images/news-1.png",
      },
      {
        label: "NEWS ARTICLE TWO",
        imgPath: "../images/news-2.png",
      },
      {
        label: "NEWS ARTICLE THREE LONGER NOW",
        imgPath: "../images/news-3.png",
      },
      {
        label: "NEWS ARTICLE FOUR",
        imgPath: "../images/news-4.png",
      },
      {
        label: "NEWS ARTICLE FIVE",
        imgPath: "../images/news-5.png",
      },
    ];

    return (
      <div>
        <div className="site-title"> </div>
        <div className="timeline">
          <Typography variant="h1">
            Plan your next adventure with us!
          </Typography>
          <Typography className="timeline-subtitle">
            With just a few simple steps you'll be on your way to your next
            adventure. Click on any of the following action items to learn more.
          </Typography>
          <div>
            {/* <img
              src="../images/home-timeline.png"
              alt="plan-trip-timeline"
              className="timeline-graphic"
            /> */}
          </div>
          <div className="timeline-text-container">
            <div className="timeline-text">
              <FontAwesomeIcon icon="plus" />
              <Typography>EXPLORE</Typography>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-text">
              <FontAwesomeIcon icon="phone" />
              <Typography>CONTACT</Typography>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-text">
              <FontAwesomeIcon icon="pencil-alt" />
              <Typography>RESERVE</Typography>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-text">
              <FontAwesomeIcon icon="plane" />
              <Typography>TAKE-OFF</Typography>
            </div>
          </div>
        </div>
        <div className="destinations">
          <PolaroidChain data={destinations} />
        </div>
        <div className="announcements">
          <img
            className="announcement-picture"
            src="../images/announcement-postcard.png"
            alt="announcements"
          />{" "}
        </div>
        <div className="blogs">
          <Typography className="home-underlined" variant="h1">
            Explore from our Blogs
          </Typography>
          <img className="blog-picture" src="../images/blog.png" alt="blog" />{" "}
        </div>
        <div className="news">
          <NewsPanel data={news} />
        </div>
      </div>
    );
  }
}
