import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/pages/home/home';
import Getuser from './views/pages/getUser/getUser';
 import CardExampleCard from './card'

class App extends Component {
  render() {
    
    return (
      <>
      {/* <CardExampleCard></CardExampleCard> */}
      <Router>
          <Switch>
           <Route exact path="/Getuser" name="Login Page" render={props => <Getuser {...props} />} />
           <Route  exact path="/" name="Home" render={props => <Home {...props} />} />
          </Switch>
      </Router>
    </>
    );
  }
}


export default App;
