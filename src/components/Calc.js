
import {useState, useMemo} from "react";

const Calc = () => {
    const[calc, setCalc] = useState(0);
    const[blocks, addBlocks] = useState([1, 2, 3]);
    const results = useMemo(()=>multiply(calc), [calc]);

    const addBlockHandler = () => {
        addBlocks(prevState => [
            ...prevState,
            Math.floor(Math.random() *100)
        ])
    }

    const calculate = () => {
        let random = Math.floor(Math.random() * 100)
        setCalc(random);
    }

    return(
        <>
        <h1>something</h1>
        {blocks.map((block, i) =>  (
            <div key = {i}>{block}</div>
        ))}
        <button onClick={addBlockHandler}>Add block</button>
        
        <h2> calclation {results} </h2>
        <button onClick={calculate}>Random</button>
        </>
    )
}

const multiply = (calc) => {
    for(let i =0; i<10000000000; i++){
        calc += 1;
    }
    return calc
}

export default Calc