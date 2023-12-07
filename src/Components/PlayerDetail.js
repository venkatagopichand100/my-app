import { useParams,useOutletContext, useLocation } from "react-router-dom"
const PlayerDetail = () => {
    const {id} = useParams()
    const playersData = useOutletContext()
    // const location = useLocation();
    // let stateObj = JSON.stringify(location.state)
    // console.log(location);
    return (
        <div className="playerContainer">
            <div className="imgContainer">
                <img src = {playersData[id-1].img} />
                <h1>{playersData[id-1].rank}</h1>
                <h1>{playersData[id-1].Description}</h1>
            </div>

        </div>
    )
}
export default PlayerDetail

//const[count, setCount] = useState()


// let a = [1, 2, 3, 5, 6];
// a[0] = 1;
