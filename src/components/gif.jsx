import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
      this.props.selectGif(this.props.id);
  }

  render() {
    
    //Handling null
    //if id doesn't exist (initial state) then return null
    const { id } = this.props;
    if (!id){
      return null;
    }


    const src = `https://i.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} className="gif" onClick = {this.handleClick}/>
    );
  }
}

export default Gif;
