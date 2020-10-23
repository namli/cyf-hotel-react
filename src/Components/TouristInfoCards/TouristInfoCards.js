import React from "react";
import PropTypes from "prop-types";
import "./TouristInfoCards.css";
import Card from "./Card/Card";

const TouristInfoCards = props => (
  <div className="TouristInfoCards container">
    <div className="row row-cols-1 row-cols-md-3">
      {props.citys.map((data, index) => (
        <div className="col mb-4" key={index}>
          <Card data={data} />
        </div>
      ))}
    </div>
  </div>
);

TouristInfoCards.propTypes = {};

TouristInfoCards.defaultProps = {};

export default TouristInfoCards;
