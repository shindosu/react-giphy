import React, { Component } from 'react';

class SearchBar extends Component {
    // constructor(props){
    //   super(props);

    //   // Controlled Component: user types input, change triggers setState(), state redefines input value 
    //   // keep track of value inside the input; keep info inside the state 
    //   // if you want to use AJAX and stuff, you would need to access the value of the input typed 
    //   this.state = {
    //     term: "" // start with nothing
    //   }
    // }

    handleUpdate = (event) => {
      // Change the state of term 
      // this.setState({
      //   term: event.target.value
      // });
      this.props.searchFunction(event.target.value);
    }

    shouldComponentUpdate(nextProps, nextState) {
      // by default this function returns true 
      // return true or false to check it it should call render method or not
      // if next props id is diffrerent from the current props id, it should update. if not it should not
      return nextProps.id !== this.props.id
    }

    // called by react so dont have to do anything
    // componentWillMount(){
    //   console.log("SEARCH BAR WILL MOUNt")
    //   setInterval
    // }

    // componentDidMount() {
    //   console.log("SEARCH BAR DID MOUNt")
      
    // }

    // componentWillUnmount() {
    //   clearInterval
    // }
    
    

    render() {
        return (
        <input type="text" className="form-control form-search" onChange={this.handleUpdate}/>
        // value={this.state.term}
        // this.handleUpdate.bind(this) is the same as writing thsi.handleUpdate
        );
    }
}

export default SearchBar;
