//conditional rendering in react
import { useState } from "react";
import Cric from "./components/Cric_normal_way _rendering";

function App(){
    const[isCricketers, setCrick] = useState(false);
    const inputChangeHandler = (e)=>{
        // console.log(e);
        // console.log(e.target.checked);
        setCrick(e.target.checked);
     }    
    return(
        <div className="App">
            <input type="checkbox" 
            onChange={inputChangeHandler}
            />
            Show Cricketers
            <hr />
            <Cric isCricketers = {isCricketers} />
            {/* {isCricketers.toString()} */}
        </div>
    )
}
export default App