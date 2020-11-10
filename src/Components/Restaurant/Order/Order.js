import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton/RestaurantButton";

const Order = props => {
  const [orderNumber, setOrderNumber] = useState(0);

  const orderOne = () => {
    setOrderNumber(orderNumber + 1);
  };
  return (
    <li className="my-2 list-group-item">
      {props.name}: {orderNumber} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
