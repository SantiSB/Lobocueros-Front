import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
 
const AnyReactComponent = ({ text }) => <div style={{textAlign: "center", width:"50px"}}><LocationOnIcon></LocationOnIcon><p style={{fontWeight:"bold", margin:"0"}}>{text}</p></div>;
 
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
          bootstrapURLKeys={{ key: "AIzaSyBBKxFzrRo-dgmGwtFpURfVlJzwwwGlPFk" }}
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
          <span><b>Fábrica</b>Carrera 12B #3-15 SUR</span>
          <span><b>Local:</b> Calle 15 # 5-70 lc 4 y 5D</span>
        </div>
      </div>
    );
  }
}
 
export default MapContact;