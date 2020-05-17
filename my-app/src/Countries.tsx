import React from "react";
import { Map } from "./Map";

interface MyProps {
  // adding a ? makes the props optional
  message?: string;
};
interface MyState {
  count: number;
};

export class Countries extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <div className="Countries">
        <Map />
      </div>
    );
  }
}