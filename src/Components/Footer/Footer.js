import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = props => (
  <div className="Footer container-fluid bg-dark text-light">
    <ul className="list-inline">
      {props.data.map((data, index) => (
        <li className="list-inline-item" key={index}>
          {data}
        </li>
      ))}
    </ul>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
