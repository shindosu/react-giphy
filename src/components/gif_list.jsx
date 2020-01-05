import React, { Component } from 'react';
import Gif from './gif';

// Destructuring
// es6 techniques
// replaced props with separated keys
// const GifList = ({gifs, selectGif}) => {
//     return (
//         <div className="gif-list">
// can also put id instead of gif, so that you can get rid of gif. makes code shorter
//             {gifs.map(gif => <Gif id={gif.id} key={gif.id}/>)}
//         </div>
//     )
// }


// List Pattern
class GifList extends Component {
    renderList = () => {
      return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);
    }

    render() {
      return (
        <div className="gif-list">
          {this.renderList()}
        </div>
      );
    }
}

export default GifList;
