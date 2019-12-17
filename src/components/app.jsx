import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  // center() {
  //   return {
  //     lat: 59.95,
  //     lng: 30.33
  //   };
  // }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList
            flats={this.state.flats}
            selectedFlat={this.state.selectedFlat}
            selectFlat={this.selectFlat}
          />
        </div>
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default App;
