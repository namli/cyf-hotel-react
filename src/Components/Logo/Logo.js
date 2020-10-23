import React from "react";
import PropTypes from "prop-types";
import "./Logo.css";

const Logo = props => (
  <div className="Logo">
    <a href={props.url}>
      <img src={props.image} />
    </a>
  </div>
);

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
