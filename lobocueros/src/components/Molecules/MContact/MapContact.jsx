import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class MapContact extends Component {
  static defaultProps = {
    center: {
      lat: 4.5882023,
      lng: -74.0926449
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCKhKld_7uwKoIyvMuREsjlscvQrXDiAbw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={4.5882023}
            lng={-74.0926449}
            text="Lobocueros"
          />
        </GoogleMapReact>
        <div className="direction-contact">
          <span>Carrera 12B #3-15 SUR</span>
          <span>Carrera 12B #3-15 SUR</span>
        </div>
      </div>
    );
  }
}
 
export default MapContact;