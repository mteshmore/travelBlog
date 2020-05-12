import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import { Home } from "./Home";
import { Countries } from "./Countries";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#FCF5E8",
      main: "#D8C7BD",
      dark: "#5A524D",
    },
    secondary: {
      main: "#BD9391",
      dark: "#707070",
    },
  },
  typography: {
    fontFamily: "Raleway",
    fontSize: 20,
  },
  overrides: {
    MuiTypography: {
      root: {
        textOverflow: "ellipsis",
        overflowWrap: "break-word",
      },
      h1: {
        fontFamily: "Free Pen",
        fontSize: "80px",
      },
      h2: {
        fontSize: "40px",
        fontWeight: "lighter",
      },
      h3: {
        fontSize: "26px",
        fontWeight: "bold",
      },
      h4: {
        fontFamily: "Free Pen",
        fontSize: "45px",
      },
    },
    MuiLink: {
      root: {
        fontFamily: "Raleway",
      },
    },
    MuiButton: {
      root: {
        color: "#BD9391",
        padding: "10px 22px",
        fontWeight: "normal",
      },
    },
  },
});

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
    return (
      <div>
        <ThemeProvider theme={defaultTheme}>
          <Router>
            <Header />
            <div>
              <Switch>
                <Route exact path="/Countries" component={Countries} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}
