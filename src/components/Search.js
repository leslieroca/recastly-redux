import React from 'react';

var Search = ({ handleSearchInputChange }) => (
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: ''
  //   };
  // }

  // handleInputChange(e) {
  //   this.props.handleSearchInputChange(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      // onChange={(e) => { console.log(e.target.value) }}
      onChange={(e) => { handleSearchInputChange(e.target.value); }}

    />
    <button className="btn hidden-sm-down">
      {/* onClick={(e) => { handleSearchInputChange(e.target.value); }} */}


      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>

);


export default Search;
