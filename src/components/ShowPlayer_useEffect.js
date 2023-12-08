import { useEffect } from "react";
const ShowPlayer = () => {
    useEffect(() => {
     console.log("use effect component is loaded");
     return () =>{
        console.log("player component removed");
     }
    })

    return(
        <div style={{background: "green", color: "white", margin: '25px'}} >
            this is the ShowPlayer component
        </div>
    )
}

export default ShowPlayer