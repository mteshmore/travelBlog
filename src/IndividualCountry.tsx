import * as React from "react";
import { Typography } from "@material-ui/core";

interface MyProps {
  // adding a ? makes the props optional
  message?: string;
}
interface MyState {
  count: number;
}

export class IndividualCountry extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div style={{ paddingTop: "100px" }}>
        {/* - Country Name Image
            - Country Internal Navigation
            - Introduction 
            - Recommendations
            - next page and back page footer */}
        <img
          className="country-image"
          src="./images/Country-Stamp.png"
          alt="country-stamp"
        />
        <div className="country-nav">
          GENERAL PLACES FESTIVALS FOODS ACTIVITIES
        </div>
        <div className="general-container">
          <Typography variant="h1">Introduction</Typography>
          <div className="intro-content">
            Just typing whatever on the history of Peru and what not.Peru is a
            country in South America that's home to a section of Amazon
            rainforest and Machu Picchu, an ancient Incan city high in the Andes
            mountains. The region around Machu Picchu, including the Sacred
            Valley, Inca Trail and colonial city of Cusco, is rich in
            archaeological sites.
          </div>
          <div className="content-box">
            <Typography variant="h3">BEST TIME TO TRAVEL TO PERU</Typography>
            <div className="content">Hello World!</div>
            <Typography variant="h3">COUNTRY DETAILS</Typography>
            <div className="content">Hello World!</div>
            <Typography variant="h3">TYPES OF VISAS NEEDED</Typography>
            <div className="content">Hello World!</div>
            <Typography variant="h3">CULTURAL ETIQUETTE</Typography>
            <div className="content">Hello World!</div>
          </div>
          <Typography variant="h1">Recommendations</Typography>
          <div className="recomm-content">
            Just typing whatever on the history of Peru and what not.Peru is a
            country in South America that's home to a section of Amazon
            rainforest and Machu Picchu, an ancient Incan city high in the Andes
            mountains. The region around Machu Picchu, including the Sacred
            Valley, Inca Trail and colonial city of Cusco, is rich in
            archaeological sites.
          </div>
        </div>
      </div>
    );
  }
}
