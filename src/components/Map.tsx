import React from "react";
import "core-js";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "./Map.css";
// import { Typography } from "@material-ui/core";

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

  render() {
    return (
      <div className="map">
        <div id="chartdiv"></div>
      </div>
    );
  }
}
