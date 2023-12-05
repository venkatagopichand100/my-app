import { useParams } from "react-router-dom"
const PlayerDetail = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>Player Detail Component {id}</h1>
        </div>
    )
}
export default PlayerDetail

//const[count, setCount] = useState()
