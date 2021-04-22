import './App.css';
import React from 'react';
import SignInScreen from './SignInScreen.js';
import MainPage from './MainPage.js';

function App() {
  return (
    <SignInScreen/>
  );

  // return (
  //   <Router>
  //       <div className="App">
  //           <Nav isSignedIn={!!this.state.user} />
  //           <Switch>
  //               <Route path="/" exact component={Home} />
  //               <Route path="/demo" component={Demo} />
  //               <Route path="/about" component={About} />
  //               <Route path="/signup" component={Signup} />
  //           </Switch>
  //       </div>
  //   </Router>
  // )
}

export default App;
