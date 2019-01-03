import React, { Component } from 'react';
import Search from './components/Search/Index';
import Cards from './components/Search/Cards';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Cards />
      </div>
    );
  }
}

export default App;
