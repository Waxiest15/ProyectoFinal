import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {    
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAsdXInYMGlY7iKwGOYoy2zuNnOUX9WeHQ" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
          lat={10.99835602}
          lng={77.01502627}
          text="My Marker"
        />
            
          </GoogleMapReact>
        </div>
      );
}
export default Map;