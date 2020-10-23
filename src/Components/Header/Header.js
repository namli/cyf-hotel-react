import React from "react";
//import PropTypes from 'prop-types';
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => (
  <header className="App-header">
    <Logo image="https://image.flaticon.com/icons/svg/139/139899.svg" url="/" />
    <div className="Name">CYF Hotel</div>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
