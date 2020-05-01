import React from 'react';
import './Story.css';


/** Story: Presentational component that renders a single linked title of an article (a hit)
 *    - Used StoryList component
 */

class Story extends React.Component {

  render() {
    return (
        <a href={this.props.url}>{this.props.title}</a>
    );
  }
}

export default Story;