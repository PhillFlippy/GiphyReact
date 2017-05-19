import React, { Component } from 'react';

import '../App.css';
import Nav from './Nav.jsx';
import Gallery from './Gallery.jsx';


class Trending extends Component {
  constructor(props){
    super(props);
    this.state={
      list: {},
      load: false
    };
  }
  componentWillMount(){
    let search_url = `http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC`;
    fetch(search_url, {method: 'GET'}).then(response => response.json()).then(json => {
      const list = json.data;
      console.log('list '+ list[1].embed_url);
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
        {
          this.state.load ? <div> <Gallery gallery={this.state.list} /> </div> : <div></div>
        }

      </div>
    );
  }
}

export default Trending;
