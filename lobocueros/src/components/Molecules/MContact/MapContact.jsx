import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const MapContact = () => {
    const AnyReactComponent = ({ text }) => <div style={{textAlign: "center", width:"50px"}}><LocationOnIcon></LocationOnIcon><p style={{fontWeight:"bold", margin:"0"}}>{text}</p></div>;
    const defaultProps = {
      center: {
        lat: 4.5882023,
        lng: -74.0926449
      },
      zoom: 15
    };
    return(
      <div style={{ height: '100%', width: '100%', border: "1px solid #420000"}}>
        <GoogleMapReact
        // AIzaSyBBKxFzrRo-dgmGwtFpURfVlJzwwwGlPFk
          bootstrapURLKeys={{ key: "AIzaSyCKhKld_7uwKoIyvMuREsjlscvQrXDiAbw" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={4.5882023}
            lng={-74.0926449}
            text="Lobocueros"
          />
        </GoogleMapReact>
        <div className="direction-contact">
          <span><b>Fábrica: </b><br></br>Carrera 12B #3-15 SUR</span>
          <span><b>Local: </b><br></br>Calle 15 # 5-70 lc 4 y 5D</span>
        </div>
      </div>
		    )
}
export default MapContact;