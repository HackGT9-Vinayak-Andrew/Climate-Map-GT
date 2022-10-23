import React from 'react';
import {
    MapContainer, Marker, Popup,
    TileLayer
} from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { useNavigate } from "react-router-dom";
const center = [33.77718230986754, -84.3988154714034];




const ChangeURL = (url) => {
    let change = useNavigate();
    let path = 'url';
    change(path);
}




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
function getBallotBox(size) {
    return L.icon({
        iconUrl: require('./ballot-box.png'),
        iconSize: [size]
    })
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
                <Popup>
                    Adams Park Library
                    <a href = "https://www.google.com/maps/dir//Adams+Park+Library,+Campbellton+Road+Southwest,+Atlanta,+GA/@33.6719524,-84.5218322,11.54z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f51d17837119db:0xe36abd5e922a703a!2m2!1d-84.4616544!2d33.7056116" target = "_blank">
                        <br></br>
                        <br></br>
                        <button>Get Directions</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[34.073891486864, -84.2922844932546]} icon = {getBallotBox(30)}>
                <Popup>Alpharetta Branch Library <br></br> Absentee Ballot Drop Box Location
                <a href = "https://www.google.com/maps/dir//Alpharetta+Branch+Library,+10+Park+Plaza,+Alpharetta,+GA+30009/@34.0739169,-84.293684,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f575a28da6f21b:0x5f3ba130e798432d!2m2!1d-84.2922893!2d34.0739169" target = "_blank">
                    <br></br>
                    <br></br>
                    <button>Get Directions!</button>
                </a>
                </Popup>
            </Marker>

            <Marker position={[33.837843280574106, -84.37927845981646]} icon = {getBallotBox(30)}>
                <Popup>Buckhead Library <br></br> Absentee Drop Box Location
                    <a href = "https://www.google.com/maps/dir//Buckhead+Library,+269+Buckhead+Ave+NE,+Atlanta,+GA+30305/@33.8374147,-84.3946619,13.38z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f5058dc7a0acf1:0xf54fa64254adaaa7!2m2!1d-84.3793961!2d33.8376168" target = "_blank">
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>

                </Popup>
            </Marker>

            <Marker position={[33.87510731122913, -84.39126685981581]} icon = {getCheckMark(30)}>
                <Popup>Burdett Park Gym
                    <a href = "https://www.google.com/maps/dir//140+Chastain+Park+Ave+NW,+Atlanta,+GA+30342/@33.8750714,-84.4000002,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f50f0bfbfd6a31:0x40a32b04977075f7!2m2!1d-84.3912454!2d33.8750717" target = "_blank">
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[33.65566818062521, -84.44970821319339]} icon = {getCheckMark(30)}>
                <Popup>College Park Library
                    <a href = "https://www.google.com/maps/dir//College+Park+Library,+Main+Street,+College+Park,+GA/@33.6556663,-84.5197803,12z/data=!3m1!5s0x88f4e2ba1c8fed0b:0x5da84f7511335bea!4m8!4m7!1m0!1m5!1m1!1s0x88f4e2ba1c1c95b7:0x911777f2ee04e1cc!2m2!1d-84.44974!2d33.655686" target = "_blank">
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[33.875089495898244, -84.39128831748712]} icon = {getCheckMark(30)}>
                <Popup>Chastain Park
                    <a href = "https://www.google.com/maps/dir//140+Chastain+Park+Ave+NW,+Atlanta,+GA+30342/@33.8750717,-84.3934341,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f50f0bfbfd6a31:0x40a32b04977075f7!2m2!1d-84.3912454!2d33.8750717" target = "_blank">
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[33.7548260603988,-84.49180968865385]} icon = {getBallotBox(30)}>
                <Popup>C.T. Martin Natatorium and Recreation Center <br></br> Absentee Ballot Drop Box Location
                    <a href = "https://www.google.com/maps/dir//3201+M.L.K.+Jr+Dr+SW,+Atlanta,+GA+30311/@33.7514672,-84.5761198,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f51c708a03e393:0x509d8afe2ddcc3e!2m2!1d-84.4917775!2d33.754835" target = "_blank">
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[33.774072069238905,-84.44701386656422]} icon = {getCheckMark(30)}>
                <Popup>Dogwood Library
                    <a href = "https://www.google.com/maps/dir//Dogwood+Library,+1838+Donald+Lee+Hollowell+Pkwy+NW,+Atlanta,+GA+30318/@33.7379937,-84.4923518,11.86z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f51b4fafae9a61:0x73c53df357098653!2m2!1d-84.4469811!2d33.7741889" target = "_blank">
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[33.92932294229814,-84.37796723097904]} icon = {getBallotBox(30)}>
                <Popup>Dorothy Benson Senior Center, Absentee Ballot Drop Box Location
                    <a href = "https://www.google.com/maps/dir//Dorothy+Benson+Multipurpose+Sr,+6500+Vernon+Woods+Dr+NE,+Sandy+Springs,+GA+30328/@33.9225561,-84.3910032,14.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f50e992bc4fa87:0x336d3e882822aa3d!2m2!1d-84.3774295!2d33.9288445" target = "_blank">
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[33.6803573765731,-84.44070274877498]} icon = {getCheckMark(30)}>
                <Popup>East Point Library
                    <a href = "https://www.google.com/maps/place/2757+Main+St,+East+Point,+GA+30344/@33.6636582,-84.4813985,12.75z/data=!4m5!3m4!1s0x88f51d52fc338e27:0xc29d185b2cbd2def!8m2!3d33.6803507!4d-84.4406947" target = "_blank">
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[34.00294113642228,-84.2944875610374]} icon = {getBallotBox(30)}>
                <Popup>East Roswell Branch Library, Absentee Drop Box Location
                    <a href = "https://www.google.com/maps/dir//2301+Holcomb+Bridge+Rd,+Roswell,+GA+30076/@33.9792027,-84.3527026,11.7z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f50ac117a5f9dd:0x63424314e50efb9f!2m2!1d-84.2944889!2d34.0029406" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.587658063416676, -84.55714350488479]} icon = {getCheckMark(30)}>
                <Popup>Etris Community Recreation
                    <a href = "https://www.google.com/maps/dir//ETRIS+COMMUNITY+CENTER,+5285+Lakeside+Dr,+Union+City,+GA+30291/@33.5876581,-84.5599706,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f4e6d33365a293:0x64f38dbae350c503!2m2!1d-84.55731!2d33.5875116" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[33.72458882289694,-84.50652900214742]} icon = {getCheckMark(30)}>
                <Popup>Evelyn G. Lower Library at Cascade
                    <a href = "https://www.google.com/maps/dir//3665+Cascade+Rd,+Atlanta,+GA+30331/@33.6911598,-84.532564,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f51c33feed906f:0x65fa9c33d01e6c77!2m2!1d-84.506529!2d33.7245894" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.75125675045581,-84.39191024877361]} icon = {getCheckMark(30)}>
                <Popup>Fulton County Government Center
                    <a href = "https://www.google.com/maps/dir//130+Peachtree+St+SW,+Atlanta,+GA+30303/@33.7508733,-84.3925656,17.43z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f5038397985adb:0xd864c1a88c86172a!2m2!1d-84.3919022!2d33.751259" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.587812829342454,-84.51951684220025]} icon = {getCheckMark(30)}>
                <Popup>Glads S. Dennard Library @ South Fulton
                    <a href = "https://www.google.com/maps/dir//4055+Flat+Shoals+Rd,+Union+City,+GA+30291/@33.5192315,-84.6393057,10.67z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f4e3ffa77aa6b5:0xf1e77be96acb09e8!2m2!1d-84.5195155!2d33.5878106" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>


            <Marker position={[33.77413533627096,-84.35511632545986]} icon = {getCheckMark(30)}>
                <Popup>Joan P. Garner Library at Ponce De Leon
                    <a href = "https://www.google.com/maps/dir//980+Ponce+De+Leon+Ave+NE,+Atlanta,+GA+30306/@33.7557558,-84.4110945,12.88z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f5041e0eece313:0xd809a049daec39d0!2m2!1d-84.3551123!2d33.7741387" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.97664608053563, -84.26588605981372]} icon = {getCheckMark(30)}>
                <Popup>Johns Creek Environmental Campus
                    <a href = "https://www.google.com/maps/dir//8100+Holcomb+Bridge+Rd,+Alpharetta,+GA+30022/@34.0274807,-84.4499389,10.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f5a07e6fbc0b89:0x83f885edcc8b484b!2m2!1d-84.2658646!2d33.9766461" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.79005425841579, -84.38567056342653]} icon = {getCheckMark(30)}>
                <Popup>High Museum of Art
                    <a href = "https://www.google.com/maps/dir//1280+Peachtree+St+NE,+Atlanta,+GA+30309/@33.7899264,-84.4561945,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f5045ace71f27f:0xcbdd3608adefa363!2m2!1d-84.3861547!2d33.7898035" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[33.718879084830164,-84.40733549662518]} icon = {getCheckMark(30)}>
                <Popup>Metropolitan Library
                    <a href = "https://www.google.com/maps/dir//1332+Metropolitan+Pkwy+SW,+Atlanta,+GA+30310/@33.7189982,-84.477382,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f5031cc58efad3:0xf0edcf13260db270!2m2!1d-84.4073422!2d33.7188752" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[34.09015410809908, -84.33638661692592]} icon = {getCheckMark(30)}>
                <Popup>Milton Library
                    <a href = "https://www.google.com/maps/dir//855+Mayfield+Rd,+Alpharetta,+GA+30009/@34.0045072,-84.5112036,10.58z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f57414d10deea5:0x17c964e4e261fe7b!2m2!1d-84.3362512!2d34.0901349" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[34.1509916017218, -84.3123855463172]} icon = {getCheckMark(30)}>
                <Popup>Milton Community Center
                    <a href = "https://www.google.com/maps/dir//1785+Dinsmore+Rd,+Alpharetta,+GA+30004/@34.1362023,-84.3618193,12.62z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f576ff608015af:0x508522bb3f0438bd!2m2!1d-84.3123319!2d34.1510005" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[33.56095181211801,-84.58727481882751]} icon = {getBallotBox(30)}>
                <Popup>New Beginnings Senior Center, Absentee Ballot Drop Box Location
                    <a href = "https://www.google.com/maps/dir//66+Brooks+Dr,+Fairburn,+GA+30213/@33.6593419,-84.700069,9.74z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f4e76c82f2a3f1:0xc140060ac884ab4!2m2!1d-84.5871864!2d33.5609157" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.845197335964734, -84.42536043098069]} icon = {getCheckMark(30)}>
                <Popup>Northside Library
                    <a href = "https://www.google.com/maps/dir//3295+Northside+Pkwy+NW,+Atlanta,+GA+30327/@33.8453157,-84.4953895,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f50559a1e18173:0x690e80a09c0f3198!2m2!1d-84.4253497!2d33.8451929" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[34.014138290064295, -84.22434198435057]} icon = {getCheckMark(30)}>
                <Popup>Northeast Spruill Oaks Library
                    <a href = "https://www.google.com/maps/dir//9560+Spruill+Rd,+Alpharetta,+GA+30022/@33.9261229,-84.4335648,11.13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f5a1d444453445:0xd53342875838c96d!2m2!1d-84.2243393!2d34.0141183" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[33.96583585417686, -84.36278135551584]} icon = {getCheckMark(30)}>
                <Popup>North Fulton Service Center (District 2)
                    <a href = "https://www.google.com/maps/dir//7741+Roswell+Rd,+Sandy+Springs,+GA+30350/@33.9657955,-84.4327061,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f50c71ad0d2f47:0x424a3e90b479cb4e!2m2!1d-84.3626663!2d33.965673" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.80538487606096, -84.47021398005664]} icon = {getCheckMark(30)}>
                <Popup>Northwest Branch at Scotts Crossing Library
                    <a href = "https://www.google.com/maps/dir//2489+Perry+Blvd+NW,+Atlanta,+GA+30318/@33.7965641,-84.4900569,13.21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f51b02b7b9f46f:0x65ac31d021aa2559!2m2!1d-84.4702582!2d33.8055133" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.530588416526214, -84.66438924877798]} icon = {getCheckMark(30)}>
                <Popup>Palmetto Library
                    <a href = "https://www.google.com/maps/dir//9111+Cascade+Palmetto+Hwy,+Palmetto,+GA+30268/@33.3890858,-84.9936045,9.78z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f4dcebf722bafd:0xa0eeff2a5e013735!2m2!1d-84.6643812!2d33.5305862" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[34.020857503632975, -84.26875965307198]} icon = {getCheckMark(30)}>
                <Popup>Park Place at Newtown School
                    <a href = "https://www.google.com/maps/dir//3125+Old+Alabama+Rd,+Johns+Creek,+GA+30022/@33.806003,-84.4570389,10.2z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f59fffecccff75:0x35024d6af35e5d7f!2m2!1d-84.2687221!2d34.0208553" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[34.064657290302314, -84.20965133097631]} icon = {getCheckMark(30)}>
                <Popup>Robert F. Fulton Library at Ocee
                    <a href = "https://www.google.com/maps/dir//5090+Abbotts+Bridge+Rd,+Johns+Creek,+GA+30005/@34.0647685,-84.2796803,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f59ee10116c32b:0xaf26469f20ed67f9!2m2!1d-84.2096406!2d34.0646462" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[34.025069915337134, -84.35803009363285]} icon = {getCheckMark(30)}>
                <Popup>Roswell Library
                    <a href = "https://www.google.com/maps/dir//115+Norcross+St,+Roswell,+GA+30075/@34.0251176,-84.4279415,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f57354b8a8c19f:0x3a7de2d6c0f194e1!2m2!1d-84.3579018!2d34.0249952" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[33.75264620102392, -84.37579803098254]} icon = {getCheckMark(30)}>
                <Popup>Selena S. Butler Park
                    <a href = "https://www.google.com/maps/dir//98+William+Holmes+Borders+Senior+Dr+SE,+Atlanta,+GA+30312/@33.7358513,-84.4079694,12.99z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f5038b50cb662d:0xc93bc441866b09fa!2m2!1d-84.3757873!2d33.7526373" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.6014317167679, -84.54990560214983]} icon = {getCheckMark(30)}>
                <Popup>South Fulton Service Center
                    <a href = "https://www.google.com/maps/dir//5600+Stonewall+Tell+Rd,+College+Park,+GA+30349/@33.6183707,-84.6226365,12.02z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f4e13bb5ab28d9:0xedd9fc66af99906!2m2!1d-84.5498195!2d33.6013529" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.729683156911655, -84.54170102118918]} icon = {getCheckMark(30)}>
                <Popup>Southwest Arts Center
                    <a href = "https://www.google.com/maps/dir//915+New+Hope+Rd+SW,+Atlanta,+GA+30331/@33.7295054,-84.6105716,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f51e8d1158ab95:0x7ed28fedf127a2e5!2m2!1d-84.5415079!2d33.7301427" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[33.632016313588494, -84.52631815982058]} icon = {getCheckMark(30)}>
                <Popup>Welcome All Recreation Center
                    <a href = "https://www.google.com/maps/dir//4255+Will+Lee+Rd,+Atlanta,+GA+30349/@33.6323501,-84.6123621,11.45z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f4e181ea24ba35:0x68b9c5e14a7c6e75!2m2!1d-84.5262967!2d33.6320074" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.672686580620386, -84.57421605981975]} icon = {getBallotBox(30)}>
                <Popup>Wolf Creek Library, Absentee Ballot Drop Box Location
                    <a href = "https://www.google.com/maps/dir//3100+Enon+Rd,+Atlanta,+GA+30331/@33.6718342,-84.6274921,12.36z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f4e028af3ed2fb:0x2d4955b69059e80f!2m2!1d-84.5741946!2d33.6726866" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.75384047082395, -84.38457514877358]} icon = {getCheckMark(30)}>
                <Popup>Georgia State University Veteran's Memorial Hall (October 19 & 20)
                    <a href = "https://www.google.com/maps/dir//Dahlberg+Hall,+30+Courtland+St+SE,+Atlanta,+GA+30303/@33.7558515,-84.4163111,12.99z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f50388b91f7921:0x6afa93a3c92c33d0!2m2!1d-84.3845671!2d33.7538338" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>

            <Marker position={[33.74890760199803, -84.4166426581095]} icon = {getCheckMark(30)}>
                <Popup>Morehouse College Archer Hall (October 18 & 19)
                    <a href = "https://www.google.com/maps/dir//Morehouse+Bookstore,+830+Westview+Dr+SW,+Atlanta,+GA+30314/@33.7463366,-84.4841016,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f50368fa35634b:0xbed6cd92ecc59!2m2!1d-84.4140618!2d33.7462136" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.70986795625239, -84.40540047086354]} icon = {getCheckMark(30)}>
                <Popup>Atlanta Metropolitan State College Edwin Thompson Student Center (October 25 & 26)
                    <a href = "https://www.google.com/maps/dir//1630+Metropolitan+Pkwy+SW,+Atlanta,+GA+30310/@33.7096279,-84.474092,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f502fc7d9bc7d7:0xe830e3c002b1c6b!2m2!1d-84.4040522!2d33.7095049" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>
            <Marker position={[33.77513429202772, -84.39921950214149]} icon = {getCheckMark(30)}>
                <Popup>Georgia Tech Ferst Center (October 25 & 26)
                    <a href = "https://www.google.com/maps/dir//Ferst+Center+for+the+Arts+(349+Ferst+Dr.),+349+Ferst+Dr+NW,+Atlanta,+GA+30313/@33.778534,-84.4060988,13.88z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f504897a2377bb:0x80f8096ca201ecb3!2m2!1d-84.3992195!2d33.775141" target = "_blank" >
                        <br></br>
                        <br></br>
                        <button>Get Directions!</button>
                    </a>
                </Popup>
            </Marker>









        </MapContainer>


    )
}
















export default Map;