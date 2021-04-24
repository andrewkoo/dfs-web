import './App.css';
import React from 'react';
import SignInScreen from './SignInScreen.js';
import HomeScreen from './HomeScreen.js';
import SlateScreen from './SlateScreen.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={SignInScreen} />
          <Route path="/home" component={HomeScreen} />
          <Route path="/players" component={SlateScreen} />
        </Switch>
      </div>
    </Router>
  );

  // return (
  //   <Router>
  //       <div className="App">
  //           <Nav isSignedIn={!!this.state.user} />
  //           <Switch>
  //               <Route path="/about" component={About} />
  //               <Route path="/signup" component={Signup} />
  //           </Switch>
  //       </div>
  //   </Router>
  // )
}

export default App;
