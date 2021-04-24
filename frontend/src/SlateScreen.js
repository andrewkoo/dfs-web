import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import firebase from 'firebase';


// const base_url = 'https://rlr5ym548a.execute-api.us-east-1.amazonaws.com/dev/players'
const base_url = 'http://localhost:4000/dev/players'

class PlayerTable extends React.Component {

  state = {
      players: null
  }

  async componentDidMount() {
    var curr_path = window.location.href.split('/')
    var url = ''
    if (curr_path[curr_path.length - 1] !== 'players') {
        url = base_url + '/' + curr_path[curr_path.length - 1]
    } else {
        url = base_url
    } 

    const idToken = await firebase.auth().currentUser?.getIdToken()
    const response = await fetch(url, {
      headers: {
        'Authorization': idToken
      }
    })
    if (response.status === 401) {
      return console.log('unauthorized')
    }
    const data = await response.json()
    // save it to your components state so you can use it during render
    this.setState({players: data['players']})
	}

  // Make sure we un-register Firebase observers when the component unmounts.
  async componentWillUnmount() {
    this.setState({players: null})
  }

  render() {
    return (
      <div>
        <div className='container has-text-centered'>
          <div className='columns is-centered'>
            <div className='column is-centered'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Slate</th>
                    <th>Player</th>
                    <th>Pos</th>
                    <th>Start</th>
                    <th>Team</th>
                    <th>Opp</th>
                    <th>BestOf</th>
                    <th>Odds</th>
                    <th>Win %</th>
                    <th>Salary</th>
                    <th>Proj</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.players && this.state.players.map(player => {
                      return (
                        <tr>
                          <td>{player.Title}</td>
                          <td>{player.slate}</td>
                          <td>{player.Player}</td>
                          <td>{player.Pos}</td>
                          <td>{player.Start}</td>
                          <td>{player.Team}</td>
                          <td>{player.Opp}</td>
                          <td>{player.BestOf}</td>
                          <td>{player.Odds}</td>
                          <td>{player['Win %']}</td>
                          <td>{player.Salary}</td>
                          <td>{player.Proj}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// function PlayerTable() {
//   return (
//     <div>
//       <div className='container has-text-centered'>
//         <div className='columns is-centered'>
//           <div className='column is-centered'>
//             <table className='table'>
//               <thead>
//                 <tr>
//                   <th>Date</th>
//                   <th>Slate</th>
//                   <th>Contest</th>
//                   <th>Cost</th>
//                   <th>Prize Pool</th>
//                   <th>Max Entries</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Date 1</td>
//                   <td><Link to="/players/46026">46026</Link></td>
//                   <td>Contest 1</td>
//                   <td>123</td>
//                   <td>0.25</td>
//                   <td>10</td>
//                 </tr>
      
//                 <tr>
//                   <td>Date 2</td>
//                   <td><Link to="/players/46029">46029</Link></td>
//                   <td>Contest 2</td>
//                   <td>123</td>
//                   <td>0.25</td>
//                   <td>10</td>
//                 </tr>
      
//                 <tr>
//                   <td>Date 3</td>
//                   <td><Link to="/players/46091">46091</Link></td>
//                   <td>Contest 3</td>
//                   <td>123</td>
//                   <td>0.25</td>
//                   <td>10</td>
//                 </tr>
      
//                 <tr>
//                   <td>Date 4</td>
//                   <td><Link to="/players/46122">46122</Link></td>
//                   <td>Contest 4</td>
//                   <td>123</td>
//                   <td>0.25</td>
//                   <td>10</td>
//                 </tr>
      
//                 <tr>
//                   <td>Date 5</td>
//                   <td><Link to="/players/46138">46138</Link></td>
//                   <td>Contest 5</td>
//                   <td>123</td>
//                   <td>0.25</td>
//                   <td>10</td>
//                 </tr>

//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
              <h1>Slate Overview</h1>
            </div>
          </header>
          <div className="App-body">
            <PlayerTable/>  
          </div>
        </div>
      </div>
    )
  }
}

export default HomeScreen;