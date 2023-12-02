import "./App.css";
import { useState } from "react";
import CricketShow from "./CricketShow";

function getRandomCricketer(){
    const cricketers = ["sachin", "dravid", "laxman", "rohit", "virat"];
    return cricketers[Math.floor(Math.random() * cricketers.length)];
}

function App(){
    const [cricketersCount, setCricketCount] = useState([]);


    const handleClick = () =>{
        setCricketCount([...cricketersCount, getRandomCricketer()]);
    }

    const renderingCricketers = cricketersCount.map((player, index) => {
        return <CricketShow type = {player} key = {index} />
    })
    return(
        <div className="app">
            <button onClick={handleClick}>Add cricketers</button>
            <div className="renderingCricketers">{renderingCricketers}</div>
        </div>
    )
}

export default App




// import CricketShow from "./CricketerShow";

// function App(){
//     const handleClick = () =>{
//         console.log("cricket button is clicked")
//     }
//     return(
//         <div>
//             <button onClick={handleClick}>Add cricketers</button>
//         </div>
//     )
// }

// export default App


// function App(){
//     const [cricketCount, setCricketCount] = useState(20);
//     console.log( useState(20));
//     const handleClick = () =>{
//        setCricketCount(cricketCount + 1)
//     }
//     return(
//         <div>
//             <button onClick={handleClick}>Add cricketers</button>
//             <p>added the cricketers count is {cricketCount}</p>
//         </div>
//     )
// }



