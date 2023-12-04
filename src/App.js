//class component

import { Component } from "react";

class App extends Component {
    // const[counter, setCounter] = useState(0) //functionl component
    //setCounter(counter + 1)
    state = {
        counter: 0
    }
    increment = () => {
        let count = this.state.counter;
        count++;
        this.setState((state) => {
            return {
                counter: count
            }
        })
    }
    render(){
        return(
            <>
            <h2>{this.state.counter}</h2>
            <button onClick={this.increment}>increment</button>
            </>
        )
    }
 
}

export default App

//1) render()
//2) import the compoenent from the react
//3) state
//4) setState
//5) if we wanted to call the function we have use this.functionname
//6) if we wanted to print the value, this.state.counter (in this case)

// useState
//const [counter, setCounter] = useState(0)