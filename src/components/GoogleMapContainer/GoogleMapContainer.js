import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '200px',
};

const containerStyle = {
  position: 'relative',  
  width: '100%',
  height: '100%'
}

export class GoogleMapContainer extends Component {
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          containerStyle={containerStyle}
          initialCenter={{ lat: 47.368650, lng: 8.539183 }}
        >
          <Marker position={{ lat: 47.368650, lng: 8.539183 }} />
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCw5tKHMaqLm9U7mYGTBKG9HH69vo6uNzQ'
})(GoogleMapContainer);