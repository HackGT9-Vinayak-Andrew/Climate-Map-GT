import React from 'react';
import ballotbox from './ballot-box.png';
import checkmark from './yellow-checkmark.png';
import "./Home.css"

function Home() {
    return (
        <div id = "Top">
            <h1 style = {{fontFamily: "Sans-Serif"}}>Fulton County 2022 Midterms Early Voting Polling Places</h1>
            <br></br>

            {/*
            <h4 style = {{fontFamily: "Sans Serif", fontStyle: "Italic"}}> By: Andrew Li and Vinayak Athavale</h4>
            */}
            <div id = "buttons">
            <a href = "https://howto.vote/vote/en/ga.html" target = "_blank">
                <button id = "button1">Voting Information</button>
            </a>
                <div id= "divider3">

                </div>


            <a href = "https://mvp.sos.ga.gov/s/" target = "_blank">
                <button id = "button2">Georgia My Voter Page</button>
            </a>
                <br></br>
                <br></br>
            </div>

            <div id = "Legend">
                <div id = "divider4">
                    <h4> Absentee Drop Box Location</h4>
                </div>
                {
                    <img id = "ballot" src= {ballotbox}
                    />
                }
                <div id = "divider2">
                    <h4> Early Voting Location </h4>
                </div>
                {
                <img id = "Check" src = {checkmark}
                />
                }
            </div>

            <br></br>
            <br></br>
        </div>


    );
}



export default Home;