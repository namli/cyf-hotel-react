import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import PrimaryButton from "../../PrimaryButton";

const Card = props => (
  <div className="card">
    <img
      src={"assets/" + props.data.img}
      className="card-img-top"
      alt={props.data.name}
    />
    <div className="card-body">
      <h5 className="card-title">{props.data.name}</h5>
      <p className="card-text">{props.data.description}</p>
      <PrimaryButton url={props.data.url} value="More info" />
    </div>
  </div>
);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
