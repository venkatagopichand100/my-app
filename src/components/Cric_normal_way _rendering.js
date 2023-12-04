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
    if(props.isCricketers) {
    return (
        players.map((player) => {
            return(
                <li>{player.playerName}</li>
            )
        })
        )
    } else {
        return (
            <h1>No Cricketers found</h1>
        )
    }
 
}
export default Cric