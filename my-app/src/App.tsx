import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home } from "./pages/Home";
import { Countries } from "./pages/Countries";
import { Contact } from "./pages/Contact";

import { IndividualCountry } from "./IndividualCountry";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";

// const freePen = {
//   fontFamily: "Free Pen",
//   src: `
//       local("Free-Pen),
//       url(${"./fonts/Free-Pen.ttf"}) format("ttf")`
// }

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
    text: {
      primary: "#707070",
      secondary: "#FCF5E8",
    },
  },
  typography: {
    fontFamily: "Raleway",
    fontSize: 12,
  },
  overrides: {
    // MuiCssBaseline: {
    //   "@global": {
    //     "@font-face": [freePen],
    //   },
    // },
    MuiTypography: {
      root: {
        textOverflow: "ellipsis",
        overflowWrap: "break-word",
      },
      h1: {
        fontFamily: "Free Pen",
        fontSize: "60px",
        color: "#707070",
        '@media (max-width:1000px)': {
          fontSize: '50px',
        },
      },
      h2: {
        fontSize: "30px",
        fontWeight: "lighter",
        color: "#BD9391",
        '@media (max-width:1000px)': {
          fontSize: '25px',
        },
      },
      h3: {
        fontSize: "20px",
        fontWeight: "normal",
        color: "#BD9391",
        '@media (max-width:1000px)': {
          fontSize: '16px',
        },
      },
      h4: {
        fontFamily: "Free Pen",
        fontSize: "45px",
        '@media (max-width:1000px)': {
          fontSize: '40px',
        },
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
                <Route exact path="/Peru" component={IndividualCountry} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Countries" component={Countries} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
            <Footer />
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}
