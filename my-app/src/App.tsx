import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import { Home } from "./Home";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";

// const defaultTheme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#339a89",
//     },
//     secondary: {
//       main: "#fffff7",
//     },
//   },
//   typography: {
//     fontFamily: "Segoe UI",
//     fontSize: 13,
//   },
//   overrides: {
//     MuiTypography: {
//       root: {
//         textOverflow: "ellipsis",
//         overflowWrap: "break-word",
//         // overflow: "hidden",
//       },
//       h1: {
//         fontSize: "50px",
//       },
//       h2: {
//         fontSize: "30px",
//       },
//       h3: {
//         fontSize: 16,
//         fontWeight: "bolder",
//       },
//       h4: {
//         fontSize: 14,
//         paddingBottom: "10px",
//       },
//     },
//     MuiLink: {
//       root: {
//         fontFamily: "Segoe UI",
//       },
//     },
//     MuiButton: {
//       root: {
//         color: "#FFFFF7",
//         padding: "10px 22px",
//         fontWeight: "normal",
//       },
//     },
//   },
// });


interface MyProps {
  // adding a ? makes the props optional
  message?: string;
}
interface MyState {
  count: number;
}

export default class App extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    // const classes = useStyles();
    return (
      <div>
        {/* {this.props.message}  */}
        {/* {this.state.count}{" "} */}
        <Router>
          <Header />
          <div style={{ padding: 50, minHeight: 280 }}>
            <Switch>
              {/* <Route exact path="/Login" component={Login} /> */}
              <Route path="/" component={Home} />
              {/* <Route path="/Resources" component={Resources} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
