import React, { useState } from "react";
import Order from "./Components/Restaurant/Order/Order";

const Restaurant = () => {
  return (
    <div className="container">
      <h3>Restaurant Orders</h3>
      <ul className="list-group">
        <Order name="Pizza" />
        <Order name="Salads" />
        <Order name="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
