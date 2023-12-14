// import React, {Component} from "react";

// class App extends Component {
//     constructor(){
//         super();
//         this.state = {
//             count: 0,
//         }
//     }

//     shouldComponentUpdate(nextProp, nextState){
//         if(nextState.count % 2 === 0) {
//             console.log("only should this component in the even number")
//             return true;
//         }
//         return false;

//     }

//     handleClick = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1,
//         }))
//     }

//     render(){
//         return (
//             <div>
//                 {this.state.count}
//                 <button onClick={this.handleClick} > Counter</button>
//             </div>
//         )
//     }
// }

// export default App

import {useEffect, useState} from "react";

const App = () => {
    const[count, setCount] = useState(0);

    const addData = () => setCount(count + 1);

    useEffect(() => {
        if(count === 6){
            alert("the value is 6 or data is about 6 star products")
        }
    })

    return(
        <>
        <button onClick={addData}>Adding Data</button>
        {count}
        </>
    )
}

export default App