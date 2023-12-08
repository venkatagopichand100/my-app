import { useState, useEffect } from "react";
import ShowPlayer from "./components/ShowPlayer_useEffect";
const App = () => {
    let[count, setCount] = useState(0);
    let[player, setPlayer] = useState('sachin');
    let[showplayer, Setshowplayer] = useState(false);

    const addOne = () => setCount(count + 1);
    const minusOne = () => setCount(count - 1);
    const setZero = () => setCount(0);

    // const apiCall = () => {
    //     console.log("api call");
    // }
    // useEffect(()=> {
    //     // if(count === 6) {
    //     //     alert("the value is equal to 6")
    //     // }
    //     // apiCall();
    //     // console.log("use effect is mounted because compoennt is loaded in the browser")
    //     console.log("use Effect");
    // })

    // useEffect(() => {
    //     console.log(count);
    // },[count]);

    // useEffect(() => {
    //     console.log(player);
    // },[player]);

    useEffect(() => {
        console.log("only once it will call")
    }, []);



    return(
        <>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={setZero}>0</button>

        <h1>Count value is: {count}</h1>
        <hr />
        <h2>{player}</h2>
        <button onClick={() => setPlayer("virat")}>Change the player</button>
        <hr />
        { showplayer ? 
        <ShowPlayer /> 
        : null}
        <button onClick={() => Setshowplayer(!showplayer)}>ShowPlayer</button>
        </>
    )
}

export default App

//{() => setbutton()}