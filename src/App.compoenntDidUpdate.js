//lifecycles of class component
import React from "react";
class App extends React.Component{
    constructor(){
        super(); //this will the the constructor of the App(parent class)
        this.state = {
            count: 0,
        }
    }
    handlerIncrement = () => {
        this.setState({count: this.state.count + 1})
    }
    componentDidUpdate(){
        //this will be called after the component rerenderd because of changes in the state or in the props
       console.log("i am in componentDidUpdate")

    }
    render() {
        return (
            <>
            <h1>I am in the render return method</h1>
            <button onClick={this.handlerIncrement}>Increase the value</button>
            {this.state.count}
            </>
        )
    }

}
export default App


//Mounting phase -> useEffect
//update phase -> count, player -> useEffect () => {}[count]
//unmount phase -> return () { } => we are removing the componet

//constructor()
//render()
// componentDidMount -> it wil when our component is fully loaded into our dom
// componentDidUpdate -> if there is a change in the previous prop with the current prop
// shouldComponentUpdate -> it will stops reenders, it will checks the next state and next prop
// componennWillUnmount -> it will called when is component is removed from the dom 