// import two dependencies
import React, { Component } from 'react'; // need to write jsx
import ReactDOM from 'react-dom'; // used at very last line

import '../assets/stylesheets/application.scss';

// used to be props, which is an object
// const Hello = ({ name }) => {
//   return (
//     <div> Hello, {name} </div>
//     // used to be props.name
//   );
// };

class Hello extends Component{
  constructor(props){
    super(props); 
    // super refers to parent class constructor, allows to use this


    // define the state in the constructor
    this.state = {
      clicked: false
    }; 
  }

  handleClick = () => {
    // TODO: change the state
    console.log('clicked');
    this.setState({
      clicked: !this.state.clicked
    })

  }

  render() {
    return (
      <div className = {this.state.clicked ? 'clicked' : null} onClick={this.handleClick}>
        Hello {this.props.name}
      </div>
    )
  }
}

const root = document.getElementById('root'); // get div id
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
  // want to use hello component, so pass in info to name
  // without name, just displays hello
}
