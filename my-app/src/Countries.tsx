import React from "react";

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
      <div className="App">
        Map Time!
      </div>
    );
  }
}