//lifecycles of class component
import React from "react";
class App extends React.Component{
    constructor(){
        super(); //this will the the constructor of the App(parent class)
        this.state = {
            dbData: null,
        }
    }
    componentDidMount(){
        //When our entire component is loaded into our DOM, this will be calling
        //after the compoennt is fully loaded or added to our DOM
        setTimeout(() => {
            const getData = "User data";
            this.setState({dbData: getData});
            console.log("Component did mount")
        }, 5000)
        console.log("Component did mount");
    }
    render() {
        return (
            <>
            <h1>I am in the render return method</h1>
            {this.state.dbData ? (this.state.dbData) : (<h1>data is coming soon</h1>)}
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