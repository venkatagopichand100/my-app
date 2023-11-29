import 'bootstrap/dist/css/bootstrap.min.css'
import dravid from "./assets/dravid.png";
import kohli from "./assets/kohili.png";
import laxman from "./assets/laxman.png";
import rohit from "./assets/rohit.png";
import sachin from "./assets/sachin.jpg";
import "./App.css"

function Cricket(props){
    return(
        <li>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p><img src={props.image} className="img-thumbnail rounded mx-auto d-block" alt={props.name}></img></p>
        </li>
    )
}

function App(){
    return(
        <>
            <h1>Hi i am from app component</h1>
            <ul>
                <Cricket 
                    name = "Sachin"
                    description = "Sachin is the first player who scores most runs in cricket "
                    image = {sachin}
                />
                <Cricket 
                    name = "kohil"
                    description = "Kohil is the first batsman to score 50 cents in the cricket hist"
                    image = {kohli}
                />
                <Cricket 
                    name = "dravid"
                    description = "mr Wall in the test cricket"
                    image = {dravid}
                />
                <Cricket 
                    name = "laxman"
                    description = "mr smart player"
                    image = {laxman}
                />
                <Cricket 
                    name = "rohit" 
                    description = "captian of india"
                    image = {rohit}
                />
            </ul>
        </>
    )
}

<ul>
    <li> a</li>
</ul>

export default App;

//react whenever we are having muliple tags or elements that should be enclosed with only parent tag
//otherwise you will get the error fragments