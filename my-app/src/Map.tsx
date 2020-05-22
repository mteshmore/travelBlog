import React from "react";
import "core-js";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "./Map.css";
import { Typography } from "@material-ui/core";

interface MyProps {
  // adding a ? makes the props optional
  message?: string;
}
interface MyState {
  count: number;
}

function am4themes_myTheme(target: any) {
  if (target instanceof am4maps.MapPolygonSeries) {
    target.mapPolygons.template.fill = am4core.color("#D8C7BD");
  }
}

am4core.useTheme(am4themes_myTheme);

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

export class Map extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };

  handleClickMap = (name: any, abbrev: any) => {};
  componentDidMount() {
    const chart = am4core.create("chartdiv", am4maps.MapChart);
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Series for World map
    const worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    // Exclude Antartica
    worldSeries.exclude = ["AQ"];
    // Make map load polygon (like country names) data from GeoJSON
    worldSeries.useGeodata = true;

    const polygonTemplate = worldSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    // polygonTemplate.fill = chart.colors.getIndex(1);
    polygonTemplate.nonScalingStroke = true;

    // Hover state
    const hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#5A524D");

    // Active state
    const as = polygonTemplate.states.create("active");
    as.properties.fill = am4core.color("#BD9391");

    polygonTemplate.events.on("hit", function (event) {
      const country = event.target.dataItem.dataContext as any;
      const name = country.name;
      const id = country.id;
      // const result = this.handleClickMap(name, id)
      // console.log(result);
    });
  }

  handleContinentClick = () => {};
  render() {
    const asiaCountries = COUNTRIES_ASIA.map((country) => {
      return (
        <div className="country-title" id={country.id}>
          {country.name}
        </div>
      );
    });
    const europeCountries = COUNTRIES_EUROPE.map((country) => {
      return (
        <div className="country-title" id={country.id}>
          {country.name}
        </div>
      );
    });
    const naCountries = COUNTRIES_NORTH_AMERICA.map((country) => {
      return (
        <div className="country-title" id={country.id}>
          {country.name}
        </div>
      );
    });
    return (
      <div className="container">
        <div className="legend">
          <Typography className="legend-title-main" variant="h1">
            Explore
          </Typography>
          <Typography className="legend-title-sub" variant="h2">
            COUNTRIES
          </Typography>
          <div className="continents-list">
            <div className="legend-continent">
              <button className="continent-title">ASIA</button>
              <div className="countries">{asiaCountries}</div>
            </div>
            {/* <div className="continent">Africa</div> */}
            <div className="legend-continent">
              <button className="continent-title">EUROPE</button>
              <div className="countries">{europeCountries}</div>
            </div>
            <div className="legend-continent">
              <button className="continent-title">NORTH AMERICA</button>
              <div className="countries">{naCountries}</div>
            </div>
            <button className="continent-title">SOUTH AMERICA</button>
            <button className="continent-title">OCEANIA</button>
          </div>
        </div>
        <div className="map">
          <div id="chartdiv"></div>
        </div>
      </div>
    );
  }
}
