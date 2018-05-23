import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cosmicInfo: {}
    }
  }


  componentDidMount(){
    this.interval = setInterval(() => axios.get('http://api.open-notify.org/iss-now.json')
    .then(e => this.setState({cosmicInfo: e}))
    ,10000);
  }
  componentWillUnmount() {
   clearInterval(this.interval);
  }
  render() {
    console.log(this.state.cosmicInfo);
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
