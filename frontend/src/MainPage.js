import React from 'react';
import './App.css';

function BulmaTable() {
  return (
    <body>
      <div class='container has-text-centered'>
        <div class='columns is-centered'>
          <div class='column is-centered'>
            <table class='table'>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Contest</th>
                  <th>Cost</th>
                  <th>Prize Pool</th>
                  <th>Max Entries</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Date 1</td>
                  <td>Contest 1</td>
                  <td>123</td>
                  <td>0.25</td>
                  <td>10</td>
                </tr>
      
                <tr>
                  <td>Date 2</td>
                  <td>Contest 2</td>
                  <td>123</td>
                  <td>0.25</td>
                  <td>10</td>
                </tr>
      
                <tr>
                  <td>Date 3</td>
                  <td>Contest 3</td>
                  <td>123</td>
                  <td>0.25</td>
                  <td>10</td>
                </tr>
      
                <tr>
                  <td>Date 4</td>
                  <td>Contest 4</td>
                  <td>123</td>
                  <td>0.25</td>
                  <td>10</td>
                </tr>
      
                <tr>
                  <td>Date 5</td>
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
    </body>
  );
}

class MainPage extends React.Component {
  render() {
    return (
      <div className="App columns">
        <div className='column nav-col is-one-fifth'>
          <div><button className='nav-button'>Contests</button></div>
          <div><button className='nav-button'>Performance</button></div>
        </div>
        <div className='column page-col'>
          <header className="App-header">
            <div className="title">
              <h1>Upcoming Contests</h1>
            </div>
          </header>
          <body className="App-body">
            <BulmaTable/>  
          </body>
        </div>
      </div>
    )
  }
}

export default MainPage;