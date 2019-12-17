import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_flat: "",
      // flats
    };
  }

  // center() {
  //   return {
  //     lat: 59.95,
  //     lng: 30.33
  //   };
  // }

  render() {
    return (
      <div>
        <div className="flat-list">
        </div>
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default App;
