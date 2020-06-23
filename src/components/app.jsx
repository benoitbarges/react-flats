import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat_list';
import Marker from './marker';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }


  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlats={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact defaultZoom={12} defaultCenter={this.center()}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng}/>
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
