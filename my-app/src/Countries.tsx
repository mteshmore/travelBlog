import React from "react";
import { Map } from "./Map";

import "./Countries.css";
import { Theme, WithStyles, withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { Typography } from "@material-ui/core";

// interface MyProps {
//   // adding a ? makes the props optional
//   message?: string;
// }
// interface MyState {
//   count: number;
// }

const COUNTRIES_ASIA = [
  { id: "BY", name: "Babylon" },
  { id: "BH", name: "Bhutan" },
  { id: "BU", name: "Burma" },
  { id: "CM", name: "Cambodia" },
  { id: "CH", name: "China" },
  { id: "IN", name: "India" },
  { id: "ID", name: "Indonesia" },
  { id: "IS", name: "Israel" },
  { id: "JA", name: "Japan" },
  { id: "KR", name: "Korea" },
  { id: "LA", name: "Laos" },
  { id: "MA", name: "Malaysia" },
  { id: "PH", name: "Philippines" },
  { id: "SB", name: "saudi Arabi" },
  { id: "SR", name: "Sri Lanka" },
  { id: "TW", name: "Taiwan" },
  { id: "TH", name: "Thailand" },
  { id: "VT", name: "Vietname" },
];

const COUNTRIES_EUROPE = [
  { id: "BE", name: "Belgium" },
  { id: "CZ", name: "Czechoslovakia" },
  { id: "DE", name: "Denmark" },
  { id: "EN", name: "England" },
  { id: "FR", name: "France" },
  { id: "GE", name: "Germany" },
  { id: "HU", name: "Hungary" },
  { id: "IC", name: "Iceland" },
  { id: "IR", name: "Ireland" },
  { id: "IT", name: "Italy" },
  { id: "PG", name: "Portugal" },
  { id: "RU", name: "Russia" },
  { id: "SC", name: "Scotland" },
  { id: "SP", name: "Spain" },
  { id: "SW", name: "Sweden" },
  { id: "SZ", name: "Switzerland" },
  { id: "WA", name: "Wales" },
];

const COUNTRIES_NORTH_AMERICA = [
  { id: "CA", name: "Canada" },
  { id: "GL", name: "Greenland" },
  { id: "DR", name: "Dominican Republic" },
  { id: "ME", name: "Mexico" },
];

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: "transparent",
  },
});

export class Countries extends React.Component<WithStyles<typeof styles>> {
  render() {
    // const { classes } = this.props;
    const asiaCountries = COUNTRIES_ASIA.map((country) => {
      return <Typography id={country.id}>{country.name}</Typography>;
    });
    const europeCountries = COUNTRIES_EUROPE.map((country) => {
      return <Typography id={country.id}>{country.name}</Typography>;
    });
    const naCountries = COUNTRIES_NORTH_AMERICA.map((country) => {
      return <Typography id={country.id}>{country.name}</Typography>;
    });

    return (
      <div className="container">
        <div className="box">
          <div className="legend">
            <Typography className="legend-title-main" variant="h1">
              Explore
            </Typography>
            <Typography className="legend-title-sub" variant="h2">
              COUNTRIES
            </Typography>
            <div className="countries-list">
              <ExpansionPanel>
                <ExpansionPanelSummary>
                  <Typography variant="h3">ASIA</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div>{asiaCountries}</div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary>
                  <Typography variant="h3">EUROPE</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div>{europeCountries}</div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary>
                  <Typography variant="h3">NORTH AMERICA</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div>{naCountries}</div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </div>
          <Map />
        </div>
      </div>
    );
  }
}
