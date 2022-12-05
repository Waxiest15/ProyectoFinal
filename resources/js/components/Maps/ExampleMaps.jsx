import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import Container from 'react-bootstrap/Container';




function Map() {

  const [lat, setLat] = useState(21.87461477124801);
  const [lng, setLng] = useState(-102.26663330211015);

  function onDrag(e){
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();
  
    setLat(lat);
    setLng(lng);
  
    console.log("position: ", lat + " ", lng)
  }

    // Loads the map using API KEY

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAsdXInYMGlY7iKwGOYoy2zuNnOUX9WeHQ",
    });

    if (!isLoaded) return <div>Loading...</div>;
    return (
      <>
        <Container className='border d-flex justify-content-center'>
          <GoogleMap
            zoom={14}
            center={{ lat: lat, lng: lng }}
            mapContainerStyle={{ width: 450, height: 450}}
        >
            <Marker
                draggable={true}
                onDragEnd={onDrag}
                position={{ lat: lat, lng: lng }}
            ></Marker>
        </GoogleMap>
        
        </Container>
        <p>lat: {lat}</p>
        <p>lng: {lng}</p>
        </>
    );
}
export default Map;
if (document.getElementById("Map")) {
    ReactDOM.render(<Map />, document.getElementById("Map"));
}
