import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


//Gif and GifList need prop bc characterized by id and array respectively. 
//search bar 
class App extends Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
        // initial state
        this.state={
            gifs:[],
            selectedGifId: "a93jwI0wkWTQs",
=======
    this.state = {
      gifs: [],
      selectedGifId: "a93jwI0wkWTQs",
    };
>>>>>>> 4a9285a7b905933e78fb944752372a9cefed14cc

    this.search("homer thinking"); // the initial category of what the api will be searching for. can put anything
  }

    search = (query) => {
      // TODO: API call
      // fetch info from api and populating state with new info
      giphy('BP2tx4c0qfWjElFjtCphy8fw2zReM2lQ').search({
        q: query,
        rating: 'g'
      }, (error, result) => {
        console.log(result); // array of objects
        this.setState({
          gifs: result.data
        });
        // Res contains gif data!
      });
    }

    render () {
      return (
        <div>
          <div className="left-scene">
            {/* Pass in function (data) to child SearchBar component */}
            <SearchBar searchFunction={this.search} />

            <div className="selected-gif">
              <Gif id={this.state.selectedGifId} />
            </div>
          </div>
          <div className="right-scene">
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
      );
    }
}

export default App;
