import React, { Component } from 'react';
import Gallery from './Gallery.jsx'
import '../App.css';

import Nav from './Nav.jsx';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      query:'',
      list: [],
      load: false,
      single: false
    };
  }
  search(){
    //query the API for the users input
    let {query} = this.state;
    query = encodeURIComponent(query);
    const BASE_URL = 'https://api.giphy.com/v1/gifs/search?q';
    let search_url = `${BASE_URL}=${query}&api_key=dc6zaTOxFJmzC`;
    fetch(search_url, {method: 'GET'}).then(response => response.json()).then(json => {
      const list = json.data;
      this.setState({
        list,
        load: true, //has the user put in some input into the search field?
        single: false //is the user only requesting one output for their search?
      })
    })

  }
  random(){
    //get the random API call
    let {query} = this.state;
    query = encodeURIComponent(query);
    const FETCH_URL = `https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${query}`;
    fetch(FETCH_URL, {method: 'GET'}).then(response => response.json()).then(json => {
      const list = json.data;
      this.setState({
        list,
        load: false,
        single: true
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Nav />
      <div className='Title'>Giphy API App</div>
      <FormGroup controlId="formBasicText">
      <InputGroup>
          <FormControl type='text'
            placeholder='Search for gif'
            value={this.state.query}
            onChange={event => {this.setState({query: event.target.value})}}
            onKeyPress={event => {
              if(event.key === 'Enter'){
                this.search();
              }
            }
          }

          />
          <InputGroup.Addon onClick={() => this.search()}><Glyphicon glyph='search'></Glyphicon></InputGroup.Addon>
          <InputGroup.Addon onClick={() => this.random()}><Glyphicon glyph='random'></Glyphicon></InputGroup.Addon>
      </InputGroup>
    </FormGroup>
    {
      this.state.load ? <div> <Gallery gallery={this.state.list} /> </div> : <div></div> } { //display only after the user has hit search
      this.state.single ? <div>   <a href={this.state.list.image_original_url}>  <img src={this.state.list.image_original_url}  className='box' alt='blah'/></a></div> : <div></div> //display if the user has selected random
    }
      </div>
    );
  }
}

export default App;
