//synthatic events in react
//SyntheticEvent is a cross browser wrapper around the browsers native event and it will 
//be automatically passed to every funtion (getdata)

export default function App(){
    const getData = (e) =>{
        console.log(e);
        console.log(e.target.innerHTML);
    }
    return(
        <div>
           <button onClick={getData}>Get Data1</button>
        </div>
    );
}


