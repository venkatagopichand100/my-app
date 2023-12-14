//lifecycles of class component
import React from "react";
class App extends React.Component{
    constructor(){
        super(); //this will the the constructor of the App(parent class)
        this.state = {
            count: 0,
        }
        this.increaseValue = null;
    }

    componentDidMount(){
        this.increaseValue= setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 2000)
        console.log("component did uppdate")
    }

    componentWillUnmount(){
        //this will be called before the component removed from the DOM.
    //    console.log("i am in componentDidUpdate")
       clearInterval(this.increaseValue);
       console.log("component will unmount")
    }

    render() {
        return (
            <>
            <h1>I am in the render return method</h1>
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