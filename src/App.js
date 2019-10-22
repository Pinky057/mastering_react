import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
   <table className="titleBar">
     <tbody>
     <tr>
       <td><img width="80" src="494-512.png" alt="icon"/></td>
       <td width="8"/>
       <td><h2>MOVIES SEARCH</h2></td>
     </tr>
     </tbody>
   </table>

      <input className="search-input" placeholder="Enter Search Here"/>

    </div>
  );
}

export default App;
