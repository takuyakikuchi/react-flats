import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_flat: "",
      // flats
    };
  }

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
