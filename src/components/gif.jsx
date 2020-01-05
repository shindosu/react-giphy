import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://i.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} className="gif" />
    );
  }
}

export default Gif;
