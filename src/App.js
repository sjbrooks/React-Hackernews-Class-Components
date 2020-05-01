import React from 'react';
import axios from 'axios';
import './App.css';

import SearchForm from "./SearchForm";
import StoryList from "./StoryList";

const BASE_URL = "https://hn.algolia.com/api/v1/search?query"


/** App: Component that renders the SearchForm and StoryList components
 *    - Holds state of searchTerm, the result from the submitted SearchForm
 *    - Used in Index component
 *    - Uses SearchForm and StoryList component
 */

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: "react", 
                   hits: []
                 }
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  updateSearchTerm(searchTerm) {
    this.setState({ searchTerm });
  }

  async componentDidMount() {
    const resp = await axios.get(`${BASE_URL}=${this.state.searchTerm}`);
    const hits = resp.data.hits.map(h => ({title: h.title, url: h.url, id: h.objectID }));
    this.setState({ hits });
  }
  
  async componentDidUpdate(prevProps, prevState) {
    // conditional logic comparing this to previous props? First param you get previous props and then previous state
    if (prevState.searchTerm !== this.state.searchTerm) {
      const resp = await axios.get(`${BASE_URL}=${this.state.searchTerm}`);
      const hits = resp.data.hits.map(h => ({title: h.title, url: h.url, id: h.objectID }));
      this.setState({ hits });
    }
  }

  render() {
    return (
      <div>
        <SearchForm updateSearchTerm={this.updateSearchTerm} />
        <StoryList hits={this.state.hits} />
      </div>
    );
  }
}


export default App;
