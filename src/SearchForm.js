import React from 'react';
import './SearchForm.css';


/** SearchForm: Form component that renders a search bar to search for hackernews articles
 *    - Holds state of searchTerm
 *    - Holds prop of updateSearchTerm to update searchTerm state in parent component, App
 *    - Used in App component
 */

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateSearchTerm(this.state.searchTerm);
  }

  handleChange(evt) {
    this.setState({ searchTerm: evt.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="search-term">Search</label>
        <input
          onChange={this.handleChange}
          name="search-term"
          id="search-term"
          value={this.state.searchTerm}
          placeholder="Search for a story..."
          />
          <button>Submit</button>
      </form>
    );
  }
}




export default SearchForm;

