import React from "react";
import Typography from "@material-ui/core/Typography";
import MobilePanel from "./MobilePanel";

import "./PolaroidChain.css";

interface MyProps {
  // adding a ? makes the props optional
  data: any;
}
interface MyState {
  count: number;
}

export default class NewsPanel extends React.Component<MyProps> {
  render() {
    const polariodDest = this.props.data.map(
      (dest: { imgPath: string; label: string }, i: number) => {
        return (
          <div
            className={"polaroid-destination dest-" + (i % 2)}
            id={"dest" + i}
          >
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
            <div className="dest-text">{dest.label}</div>
          </div>
        );
      }
    );
    return (
      <div>
        <Typography variant="h1">Explore by Destinations</Typography>
        <div className="mobile-polaroid-chain">
          {" "}
          <MobilePanel data={polariodDest} />{" "}
        </div>
        <div className="polaroid-chain">{polariodDest}</div>
      </div>
    );
  }
}
