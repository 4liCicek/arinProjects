import React from "react";

class SearchBar extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5">
          <div className="col-12"></div>
          <input
            onChange={this.props.searchMovieProp}
            type="text"
            className="form-control"
            placeholder="Search a movie"
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
