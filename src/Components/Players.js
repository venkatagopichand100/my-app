import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
const Players = () => {
    const[players, setPlayers] = useState([
    {id: 1, playerName: "sachin", rank: 1, Description: "number one player", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/220px-Sachin-Tendulkar_%28cropped%29.jpg"},
    {id: 2, playerName: "Rahul", rank: 2, Description: "number two player", img: "https://static.toiimg.com/thumb/msid-104320595,width-1280,height-720,resizemode-4/104320595.jpg"},
    {id: 3, playerName: "virat", rank: 3, Description: "number three player", img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/indias-virat-kohli-celebrates-his-half-century-in-final-vs-australia-reuters-194059656-16x9.jpg?VersionId=U6lSvZEcx2vQU6kIf6YP3cBN_IUdeAXi&size=690:388"},
    {id: 4, playerName: "Dravid", rank: 10, Description: "number four player", img: "https://static.toiimg.com/thumb/msid-104320595,width-400,resizemode-4/104320595.jpg"},
    {id: 5, playerName: "laxman", rank: 101, Description: "number five player", img: "https://static.toiimg.com/thumb/msid-104730070,width-400,resizemode-4/104730070.jpg"},
    {id: 6, playerName: "irfan", rank: 100, Description: "number six player", img: "https://static.toiimg.com/thumb/msid-103691546,width-1280,height-720,resizemode-4/103691546.jpg"},
    

    ]);

    return (
        <div>
         <ul>
            {
                players.map((player) => {
                    return (
                        <li className="card">
                            <Link state={player} to={`/players/${player.id}`} style={{textDecoration: 'none'}}>
                                <img src={player.img} />
                                <div>
                                    <h2>{player.playerName}</h2>
                                </div>
                                </Link>
                            </li>
                    )
                })
            }


            </ul>
            <Outlet context={players}/>
        {/* to show the child routes into our application we have to use <Outlet /> */}
        </div>
    )
}
export default Players;