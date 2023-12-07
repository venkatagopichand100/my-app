import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() =>{
        setTimeout(()=>{
            navigate(-1)
        }, 1000)
    }, [])
    return (
        <div>
            <h1>Sorry the page which your looking in not present</h1>
        </div>
    )
}
export default NotFound