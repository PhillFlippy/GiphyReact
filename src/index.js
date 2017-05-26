import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';
import './index.css';
import Trending from './Components/Trending.jsx';
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Switch
} from 'react-router-dom'

ReactDOM.render(
  //Routing for the navigation of the website. Browser history is used to remember the history of the page so the back and refresh buttons work.
  <Router history={browserHistory}>
     <Switch>
       {/* Sets up app as the home page */}
       <Route exact path="/" component={App}/>
       <Route path="/trending" component={Trending}/>

     </Switch>
   </Router>,
  document.getElementById('root')
);
