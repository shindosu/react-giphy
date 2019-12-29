
// -- React Basics Tutorial/Cheatsheet -- //

// -- PROPS: immutable data; arguments passed into React components, in our case, on line 65 where it says name = "World". This is actually receiving the argument as a props object.
// -- STATE: mutable data. includes things like events, counters, etc

// -- STATELESS components can be coded as FUNCTIONS --// 

// used to be props, which is an object
// const Hello = ({ name }) => {
//   return (
//     <div> Hello, {name} </div>
//     // used to be props.name
//   );
// };


// ---- STATEFUL (state changes) can be written using classes --- // 

class Hello extends Component{
    constructor(props){
      // console.log(this) //logs out the Hello class and its class methods
      // console.log(super()) //logging super and this will yield the same result, in this case context and props is undefined when you give it a name
  
      super(props);
      console.log(super(props))
  
      console.log(this.props) //if you want to access this.props in the constructor and hence forth; logs name=world;
      //super used to call parent constructor
        //with super(), undefined
        //with super(props). gives access to this.props which is JS object
  
      // define the state in the constructor
      this.state = {
        clicked: false,
        counter: 0
        //can also contain many things, such as counters
      }; 
      console.log(this.state)
    }
  
    handleClick = () => {
      // TODO: change the state
      // --- can't do this.state = something, always change with this.setState() bc thanks to setState method React will call render method again if the state changed 
      console.log('clicked');
      this.setState({
        clicked: !this.state.clicked,
        counter: this.state.counter + 1
      })
  
    }
  
    //every class based component need to have a render method
    render() {
      return (
        <div className = {this.state.clicked ? 'clicked' : null} onClick={this.handleClick}>
          Hello {this.props.name} {this.state.counter}
        </div>
      )
    }
  }
  
  const root = document.getElementById('root'); // get div id
  if (root) {
    ReactDOM.render(<Hello name="World" />, root);
    //renders the HTML defined inside the render method inside the div with id root 
    // want to use hello component, so pass in info to prop name
    // without name, just displays hello
  }
  