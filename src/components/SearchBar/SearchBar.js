import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {

  state = {
    term: ''
  }
  
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="searched-input">Image Search</label>
        <input
          type="text"
          id="searched-input"
          placeholder="enter serched term"
          value={this.state.term}
          onChange={e => this.setState({term: e.target.value})}
        />
      </form>
    );
  }
}

export default SearchBar;
