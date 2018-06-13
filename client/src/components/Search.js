import React from 'react';

const Filter = (props) => (
  <div className="row">
    <div className="input-field col s12">
      <input type="text" value={props.searchTerm} onChange={props.handleSearch} id="seach-input" className="autocomplete"/>
      <label htmlFor="seach-input">Search by first or last name</label>
      </div>
  </div>
);

export default Filter;