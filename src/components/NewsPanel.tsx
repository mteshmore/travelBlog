import React from "react";
import Typography from "@material-ui/core/Typography";
import MobilePanel from "./MobilePanel";

import "./NewsPanel.css";

interface MyProps {
  // adding a ? makes the props optional
  data: any;
}
interface MyState {
  count: number;
}

export default class NewsPanel extends React.Component<MyProps> {
  render() {
    const newsPanel = this.props.data.map(
      (article: { imgPath: string; label: string }, i: any) => {
        return (
          <div className="news-block">
            <img className="news-image" src={article.imgPath} alt="news" />
            <div className="news-title-background">
              <div className="news-title">{article.label}</div>
            </div>
          </div>
        );
      }
    );
    return (
      <div>
        <Typography variant="h1">Explore through News</Typography>
        <div className="mobile-news-panel">
          <MobilePanel data={newsPanel} />
        </div>
        <Typography className="news-panel">{newsPanel}</Typography>
      </div>
    );
  }
}
