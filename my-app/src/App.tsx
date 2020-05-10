import React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";

interface MyProps {
  // adding a ? makes the props optional
  message?: string;
};
interface MyState {
  count: number;
};

export default class App extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <div className="App">
        Hello World!
        <div>
          {/* {this.props.message}  */}
          {this.state.count}{" "}
        </div>
      </div>
    );
  }
}
