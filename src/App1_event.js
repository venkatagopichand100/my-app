//events

export default function App(){
    const getData = (param) =>{
        console.log("getdata is called")
    }
    return(
        <div>
            {/* //we have to call like this like arrow function when we have parameters in the function call */}
            <button onClick={() => getData()}>Get Data</button>
            
            {/* //we have to call like this without () in react <button onClick={getData}>Get Data</button> */}
          
            {/* //we should not do like this in react becuase before clicking the button it will call 
           <button onClick={getData()}>Get Data</button> */}
        </div>
    );
}

