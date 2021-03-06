//Component that fetches the most popular gifs.

import React, { Component } from 'react';

import '../App.css';
import Nav from './Nav.jsx';
import Gallery from './Gallery.jsx';


class Trending extends Component {
  constructor(props){
    super(props);
    this.state={
      list: [],
      load: false
    };
  }
  componentWillMount(){
    //after the page loads the method will  fetch the json of gif data.
    let search_url = `https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC`;
    fetch(search_url, {method: 'GET'}).then(response => response.json()).then(json => {
      const list = json.data;

      this.setState({
        list
      })
    })
  }

componentDidMount(){
  this.setState({
    load: true
  })

}

  render() {
    return (
      <div className="App">
        <Nav />
        { //is the website loaded? If so display the data.
          this.state.load ? <div> <Gallery gallery={this.state.list} /> </div> : <div></div>
        }

      </div>
    );
  }
}

export default Trending;
