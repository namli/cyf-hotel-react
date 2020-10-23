import React from "react";

const navigate = e => {
  e.preventDefault();
  if (e.target.getAttribute("data-url") !== null) {
    window.open(e.target.getAttribute("data-url"), "_blank");
  }
};

const PrimaryButton = props => {
  return (
    <button onClick={navigate} className="btn btn-primary" data-url={props.url}>
      {props.value}
    </button>
  );
};

export default PrimaryButton;
