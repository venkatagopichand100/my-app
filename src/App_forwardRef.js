import { useRef, forwardRef } from "react"
const App = () => {
    const inputText = useRef();
    const handlerClick = () =>{
        console.log(inputText.current.value);
    }

    return (
        <>
            <h1>Form</h1>
            <InputComponent ref = {inputText}/>
            <button onClick={handlerClick}>Click me</button>

        </>
    )
}

const InputComponent = forwardRef((props,ref) => {
return  <input type = "text" ref = {ref}/>
})

export default App