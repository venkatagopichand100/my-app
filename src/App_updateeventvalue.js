//how to update the state value when the data is entered in the textbox
import { useState } from "react";
export default function App(){
    const [value, getValue] = useState('')
    const getData = (e) =>{
        getValue(e.target.value);
        // console.log(e.target.value);
    }
    return(
        <div>
            <h1>{value}</h1>
           <input onChange={getData} type="text" />
        </div>
    );
}


