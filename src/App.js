import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Location from './components/Location';

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
    ,5000);
  }
  componentWillMount(){
    axios.get('http://api.open-notify.org/iss-now.json')
    .then(e => this.setState({cosmicInfo: e}));

  }

  componentWillUnmount() {
   clearInterval(this.interval);
  }
  render() {
    return (
      <div className="App">
        <div className="coordsWrap">
        <Location coords={this.state.cosmicInfo.data}/></div>

      </div>
    );
  }
}

export default App;
