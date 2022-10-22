import React from 'react';
import {
    MapContainer,
    TileLayer
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as L from "leaflet";
const center = [33.77718230986754, -84.3988154714034];


function Map() {

  return (
      createMap()
  )


}


function createMap() {
    return (
        <MapContainer
            center = {center}
            zoom={3}
            style={{ width: '100vw', height: '100vh'}}>
            <TileLayer
                url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=c6mxawEM3vEsscv3fKMp'
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />

        </MapContainer>
    )
}















export default Map;