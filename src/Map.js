import React from 'react';
import {
    MapContainer, Marker, Popup,
    TileLayer
} from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import './leaflet-heat.js'
const center = [33.77718230986754, -84.3988154714034];


function Map() {

  return (
      createMap()
  )

}

function getCheckMark(size) {
    return L.icon({
        iconUrl: require('./yellow-checkmark.png'),
        iconSize: [size]
    });
}

function createMap() {
    return (


        <MapContainer
            center = {center}
            zoom={10.5}
            style={{ width: '100vw', height: '100vh'}}>
            <TileLayer
                url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=c6mxawEM3vEsscv3fKMp'
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />

            <Marker position={[33.70571848795859, -84.46171419325347]} icon = {getCheckMark(30)}>
                <Popup>Adams Park Library</Popup>
            </Marker>

            <Marker position={[34.073891486864, -84.2922844932546]}>
                <Popup>Alpharetta Branch Library, Absentee Ballot Drop Box Location</Popup>
            </Marker>

            <Marker position={[33.837843280574106, -84.37927845981646]}>
                <Popup>Buckhead Library, Absentee Drop Box Location</Popup>
            </Marker>

            <Marker position={[33.87510731122913, -84.39126685981581]}>
                <Popup>Burdett Park Gym</Popup>
            </Marker>

            <Marker position={[33.65566818062521, -84.44970821319339]}>
                <Popup>College Park Library</Popup>
            </Marker>

            <Marker position={[33.875089495898244, -84.39128831748712]}>
                <Popup>Chastain Park</Popup>
            </Marker>

            <Marker position={[33.7548260603988,-84.49180968865385]}>
                <Popup>C.T. Martin Natatorium and Recreation Center, Absentee Ballot Drop Box Location</Popup>
            </Marker>

            <Marker position={[33.774072069238905,-84.44701386656422]}>
                <Popup>Dogwood Library</Popup>
            </Marker>

            <Marker position={[33.92932294229814,-84.37796723097904]}>
                <Popup>Dorothy Benson Senior Center, Absentee Ballot Drop Box Location</Popup>
            </Marker>

            <Marker position={[33.6803573765731,-84.44070274877498]}>
                <Popup>East Point Library</Popup>
            </Marker>
            <Marker position={[34.00294113642228,-84.2944875610374]}>
                <Popup>East Roswell Branch Library, Absentee Drop Box Location</Popup>
            </Marker>
            <Marker position={[33.94349493080518,-84.2763509021431]}>
                <Popup>Etris Community Recreation</Popup>
            </Marker>

            <Marker position={[33.72458882289694,-84.50652900214742]}>
                <Popup>Evelyn G. Lower Library at Cascade</Popup>
            </Marker>
            <Marker position={[33.75125675045581,-84.39191024877361]}>
                <Popup>Fulton County Government Center SUITE #2186</Popup>
            </Marker>
            <Marker position={[33.587812829342454,-84.51951684220025]}>
                <Popup>Glads S. Dennard Library @ South Fulton</Popup>
            </Marker>


            <Marker position={[33.77413533627096,-84.35511632545986]}>
                <Popup>Joan P. Garner Library at Ponce De Leon</Popup>
            </Marker>
            <Marker position={[33.97664608053563, -84.26588605981372]}>
                <Popup>Johns Creek Environmental Campus</Popup>
            </Marker>
            <Marker position={[33.79005425841579, -84.38567056342653]}>
                <Popup>High Museum of Art</Popup>
            </Marker>

            <Marker position={[33.718879084830164,-84.40733549662518]}>
                <Popup>Metropolitan Library</Popup>
            </Marker>
            <Marker position={[34.09015410809908, -84.33638661692592]}>
                <Popup>Milton Library</Popup>
            </Marker>
            <Marker position={[34.1509916017218, -84.3123855463172]}>
                <Popup>Milton Community Center</Popup>
            </Marker>

            <Marker position={[33.56095181211801,-84.58727481882751]}>
                <Popup>New Beginnings Senior Center, Absentee Ballot Drop Box Location</Popup>
            </Marker>
            <Marker position={[33.845197335964734, -84.42536043098069]}>
                <Popup>Northside Library</Popup>
            </Marker>
            <Marker position={[34.014138290064295, -84.22434198435057]}>
                <Popup>Northeast Spruill Oaks Library</Popup>
            </Marker>

            <Marker position={[33.96583585417686, -84.36278135551584]}>
                <Popup>North Fulton Service Center (District 2)</Popup>
            </Marker>
            <Marker position={[33.80538487606096, -84.47021398005664]}>
                <Popup>Northwest Branch at Scotts Crossing Library</Popup>
            </Marker>
            <Marker position={[33.530588416526214, -84.66438924877798]}>
                <Popup>Palmetto Library</Popup>
            </Marker>

            <Marker position={[34.020857503632975, -84.26875965307198]}>
                <Popup>Park Place at Newtown School</Popup>
            </Marker>
            <Marker position={[34.064657290302314, -84.20965133097631]}>
                <Popup>Robert F. Fulton Library at Ocee</Popup>
            </Marker>
            <Marker position={[34.025069915337134, -84.35803009363285]}>
                <Popup>Roswell Library</Popup>
            </Marker>

            <Marker position={[33.75264620102392, -84.37579803098254]}>
                <Popup>Selena S. Butler Park</Popup>
            </Marker>
            <Marker position={[33.6014317167679, -84.54990560214983]}>
                <Popup>South Fulton Service Center</Popup>
            </Marker>
            <Marker position={[33.729683156911655, -84.54170102118918]}>
                <Popup>Southwest Arts Center</Popup>
            </Marker>

            <Marker position={[33.632016313588494, -84.52631815982058]}>
                <Popup>Welcome All Recreation Center</Popup>
            </Marker>
            <Marker position={[33.672686580620386, -84.57421605981975]}>
                <Popup>Wolf Creek Library, Absentee Ballot Drop Box Location</Popup>
            </Marker>
            <Marker position={[33.75384047082395, -84.38457514877358]}>
                <Popup>Georgia State University Veteran's Memorial Hall (October 19 & 20)</Popup>
            </Marker>

            <Marker position={[33.74890760199803, -84.4166426581095]}>
                <Popup>Morehouse College Archer Hall (October 18 & 19)</Popup>
            </Marker>
            <Marker position={[33.70986795625239, -84.40540047086354]}>
                <Popup>Atlanta Metropolitan State College Edwin Thompson Student Center (October 25 & 26)</Popup>
            </Marker>
            <Marker position={[33.77513429202772, -84.39921950214149]}>
                <Popup>Georgia Tech Ferst Center (October 25 & 26)</Popup>
            </Marker>









        </MapContainer>


    )
}
















export default Map;