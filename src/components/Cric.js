import { useState } from "react";
function Cric(props){
    const[players, setPlayers] = useState([
        {playerNo: 1, playerName: "Sachin"},
        {playerNo: 2, playerName: "Dravid"},
        {playerNo: 3, playerName: "Rohit"},
        {playerNo: 4, playerName: "Virat"},
        {playerNo: 5, playerName: "Shami"},
        {playerNo: 6, playerName: "SuryaKumar"}
    ]);

    const playerList = (
        players.map((player) => {
            return(
                <li>{player.playerName}</li>
            )
        })
    );
    switch(props.isCricketers){
        case true:
            return playerList
            break;
        case false:
            return <h1> No Player found</h1>
            break;
        default :
            return null
    };
}

export default Cric


//ternary operator javascript
