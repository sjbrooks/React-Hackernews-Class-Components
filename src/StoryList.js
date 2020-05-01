import React from 'react';
import './StoryList.css';
import Story from './Story';

// don't we need props here? only if you need to do other things like create new state or methods. happens auto otherwise

/** StoryList: Presentational component that renders a list of stories using prop of 'hits'
 *    - Holds prop of 'hits', an array of article objects containing the id, title, and url of an article
 *    - Used in App component
 *    - Uses Story component
 */

class StoryList extends React.Component {
  
  render() {
    return (
      <div>
        <ul>
        {this.props.hits.map(h => 
        <li key={h.id}><Story title={h.title} url={h.url} /></li> )}
        </ul>
      </div>
    );
  }
}


export default StoryList;