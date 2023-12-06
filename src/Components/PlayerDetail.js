import { useParams,useOutletContext, useLocation } from "react-router-dom"
const PlayerDetail = () => {
    const {id} = useParams()
    // const playersData = useOutletContext()
    const location = useLocation();
    // console.log(location);
    return (
        <div>
            <h1>Player Detail Component {id}</h1>
            {/* <h2>{JSON.stringify(playersData[id-1])}</h2> */}
            {/* <h2>{JSON.stringify(location)}</h2> */}
          
            <h2>{JSON.stringify(location.state)}</h2>
        </div>
    )
}
export default PlayerDetail

//const[count, setCount] = useState()


// let a = [1, 2, 3, 5, 6];
// a[0] = 1;
