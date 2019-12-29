import React, { Component } from 'react';

class Gif extends Component {

    render() {
        const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
        return (
            <image src={src} className="gif"></image>
        );
    }
}

export default Gif;