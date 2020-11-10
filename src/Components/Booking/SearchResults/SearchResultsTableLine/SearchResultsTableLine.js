import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchResultsTableLine.css";
import moment from "moment";

const SearchResultsTableLine = props => {
  const [highlighting, setHighlighting] = useState("");

  const makeSelected = () => {
    if (highlighting) {
      setHighlighting("");
    } else {
      setHighlighting("table-danger");
    }
  };

  const showProfile = () => {
    props.setProfileId(props.booking.id);
  };

  const checkIn = moment(props.booking.checkInDate);
  const checkOut = moment(props.booking.checkOutDate);
  return (
    <tr onClick={makeSelected} className={highlighting}>
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
      <td>
        <button onClick={showProfile} className="btn btn-primary">
          Show profile
        </button>
      </td>
    </tr>
  );
};

SearchResultsTableLine.propTypes = {};

SearchResultsTableLine.defaultProps = {};

export default SearchResultsTableLine;
