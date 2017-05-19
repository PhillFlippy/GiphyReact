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
  <Router history={browserHistory}>
     <Switch>
       <Route exact path="/" component={App}/>
       <Route path="/trending" component={Trending}/>

     </Switch>
   </Router>,
  document.getElementById('root')
);
