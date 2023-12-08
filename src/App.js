import { useState, useCallback } from "react";
import Name from "./components/Name";
import Count from "./components/Count";
import CountBtn from "./components/CountBtn";
import Player from "./components/Player";
import PlayerBtn from "./components/PlayerBtn";


const App = () => {
    const [count, setCount] = useState(0);
    const [player, setPlayer] = useState(11);

    const handleCount = useCallback(() => {
        setCount(count + 1)
    },[count]);

    const handlePlayer = useCallback(() => {
        setPlayer(player + 1)
    },[player])



    return(
        <>
            <Name />
            <hr />
            <Count count = {count} />
            <CountBtn handleCount = {handleCount} />
            <hr />
            <Player player = {player} />
            <PlayerBtn handlePlayer = {handlePlayer} />
        </>
    )
}


export default App