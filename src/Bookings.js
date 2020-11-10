import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./Components/Booking/SearchResults/SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const [profileId, setProfileId] = useState(null);
  // const [bookings, setBookings] = useState([]);

  // useEffect(() => {
  //   fetch("https://cyf-react.glitch.me")
  //     .then(res => res.json())
  //     .then(apiBookings => setBookings(apiBookings));
  // });

  const search = searchVal => {
    if (searchVal !== "") {
      const filteredBookings = bookings.filter(
        booking =>
          booking.firstName === searchVal || booking.surname === searchVal
      );
      setBookings(filteredBookings);
    } else {
      setBookings(bookings);
    }
  };

  const idUpdater = id => {
    setProfileId(id);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} setProfileId={idUpdater} />
        {profileId && <CustomerProfile id={profileId} />}
      </div>
    </div>
  );
};

export default Bookings;
