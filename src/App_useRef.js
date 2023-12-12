import { useRef } from "react"
const App = () => {
    const inputText = useRef();
    const handlerClick = () =>{
        console.log(inputText.current.value);
        console.log(inputText.current);
    }

    return (
        <>
            <h1>Form</h1>
            <input type = "text" ref = {inputText}/>
            <button onClick={handlerClick}>Click me</button>

        </>
    )
}

export default App