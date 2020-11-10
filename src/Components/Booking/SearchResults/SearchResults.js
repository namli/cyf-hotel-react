import React, { useState } from "react";
import SearchResultsTableLine from "./SearchResultsTableLine/SearchResultsTableLine";
import PropTypes from "prop-types";
import "./SearchResults.css";

const SearchResults = props => (
  <div className="SearchResults">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out date</th>
          <th scope="col">N° of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, i) => {
          return (
            <SearchResultsTableLine
              booking={booking}
              key={i}
              setProfileId={props.setProfileId}
            />
          );
        })}
      </tbody>
    </table>
  </div>
);

SearchResults.propTypes = {};

SearchResults.defaultProps = {};

export default SearchResults;
