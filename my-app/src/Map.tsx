import React from "react";
import "core-js";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_moonrisekingdom from "@amcharts/amcharts4/themes/moonrisekingdom";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

interface MyProps {
  // adding a ? makes the props optional
  message?: string;
}
interface MyState {
  count: number;
}

// am4core.useTheme(am4themes_moonrisekingdom);
// am4core.useTheme(am4themes_animated);

export class Map extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    // create map instance
    // let chart = am4core.create("chartdiv", am4maps.MapChart);

    return <div id="chartdiv"> {} </div>;
  }
}
