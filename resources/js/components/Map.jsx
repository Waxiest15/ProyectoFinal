import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';  
import React from 'react';

export class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{latitude: 21.887653840409918, longitude:  -102.27435764303208},
                {latitude: 21.8831273780605, longitude: -102.28415704718965}
                ]
      }
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 21.881676, lng:-102.2722583,17.84}}
          >
            {this.displayMarkers()}
          </Map>
      );
    } 
  }

  export default Map({
    apiKey: 'GOOGLE_MAPS_KEY'})

if (document.getElementById('Map')) {
    ReactDOM.render(<Map />, document.getElementById('Map'));
}