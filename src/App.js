import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Header from "./Components/Header/Header";
import TouristInfoCards from "./Components/TouristInfoCards/TouristInfoCards";

let citys = [
  {
    name: "glasgow",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    url: "https://peoplemakeglasgow.com",
    img: "glasgow.jpg"
  },
  {
    name: "manchester",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    url: "https://visitmanchester.com",
    img: "manchester.jpg"
  },
  {
    name: "london",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    url: "https://visitlondon.com",
    img: "london.jpg"
  }
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards citys={citys} />
      <Bookings />
    </div>
  );
};

export default App;
