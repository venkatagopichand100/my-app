import "./CricketShow.css"
import { useState } from "react";
import dravid from "./assets/dravid.png";
import virat from "./assets/kohili.png";
import laxman from "./assets/laxman.png";
import rohit from "./assets/rohit.png";
import sachin from "./assets/sachin.jpg";
import like from "./assets/like.png";


const imgMap = {
    dravid,
    virat,
    laxman,
    rohit,
    sachin
}

function CricketShow({type}){
    const[likes, setLikes] = useState(0)

    const circketHandleClick = () => {
        setLikes(likes + 1);
    }

    return (
    <div className="cricketshow" onClick={circketHandleClick}>
        <img className = "cricketer" alt = "cricketer" src={imgMap[type]} />
        <img className = "likesClass" alt = "likes" src={like} style={{width: 10 + 10 * likes}} />
    </div> 
    )
}
export default CricketShow