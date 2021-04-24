import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import firebase from 'firebase';

function ContestTable() {
  return (
    <div>
      <div className='container has-text-centered'>
        <div className='columns is-centered'>
          <div className='column is-centered'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Slate</th>
                  <th>Contest</th>
                  <th>Cost</th>
                  <th>Prize Pool</th>
                  <th>Max Entries</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Date 1</td>
                  <td><Link to="/players/46026">46026</Link></td>
                  <td>Contest 1</td>
                  <td>123</td>
                  <td>0.25</td>
                  <td>10</td>
                </tr>
      
                <tr>
                  <td>Date 2</td>
                  <td><Link to="/players/46029">46029</Link></td>
                  <td>Contest 2</td>
                  <td>123</td>
                  <td>0.25</td>
                  <td>10</td>
                </tr>
      
                <tr>
                  <td>Date 3</td>
                  <td><Link to="/players/46091">46091</Link></td>
                  <td>Contest 3</td>
                  <td>123</td>
                  <td>0.25</td>
                  <td>10</td>
                </tr>
      
                <tr>
                  <td>Date 4</td>
                  <td><Link to="/players/46122">46122</Link></td>
                  <td>Contest 4</td>
                  <td>123</td>
                  <td>0.25</td>
                  <td>10</td>
                </tr>
      
                <tr>
                  <td>Date 5</td>
                  <td><Link to="/players/46138">46138</Link></td>
                  <td>Contest 5</td>
                  <td>123</td>
                  <td>0.25</td>
                  <td>10</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="App columns">
        <div className='column nav-col is-one-fifth'>
          <div><Link to="/home">Contests</Link></div>
          <div><Link to="/home">Performance</Link></div>
          <div><p>-</p></div>
          <div><Link to="/">Sign-Out</Link></div>
        </div>
        <div className='column page-col'>
          <header className="App-header">
            <div className="title">
              <h1>Upcoming Contests</h1>
            </div>
          </header>
          <div className="App-body">
            <ContestTable/>  
          </div>
        </div>
      </div>
    )
  }
}

export default HomeScreen;