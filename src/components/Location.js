import React, { Component } from 'react';


class Location extends Component {
  render() {

    if (this.props.coords) {
      let position = this.props.coords.iss_position;
      console.log(position);
      return (
        <div className="Location">
          <h4>ISS current position:</h4> 
          <h5> latitude: {position.latitude} longitude: {position.longitude} </h5>
        </div>
      );
    }
    return (
      <div className="Location">

      </div>
    )
  }
}

export default Location;
