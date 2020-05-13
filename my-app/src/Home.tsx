import React from "react";

import "./Home.css";
import { Typography } from "@material-ui/core";

interface MyProps {
  // adding a ? makes the props optional
  message?: string;
}
interface MyState {
  count: number;
}

export class Home extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <div>
        <div className="title">Adventures Await</div>
        <Typography variant="h1">Plan your adventure with us!</Typography>
        <div className="adventure-timeline"> _______________________ </div>
      </div>
    );
  }
}
