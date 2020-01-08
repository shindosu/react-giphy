import React, { Component } from 'react';
import Gif from './gif';

// Destructuring: taking smth like props that has several keys
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
const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};
// class GifList extends Component {
//     renderList = (props) => {
//       return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif}/>);
//       // key is used by react to understand that in list of elements something changed
//       // providing key in every element in list helps react tracking the state of list; new element, order changes, etc
//     }

//     render() {
//       return (
//         <div className="gif-list">
//           {this.renderList()}
//         </div>
//       );
//     }
// }

export default GifList;
