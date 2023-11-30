import 'bootstrap/dist/css/bootstrap.min.css';
import {CricketerData} from "./data.js";
import Cricket from './components/Cricket.js';

function App(){
    return(
        <>
            <ul>
                <Cricket 
                    name = {CricketerData[0].name}
                    description = {CricketerData[0].description}
                    image = {CricketerData[0].image}
                />
                <Cricket {...CricketerData[1]}
                />
                <Cricket 
                   {...CricketerData[2]}
                />
                <Cricket 
                    name = {CricketerData[3].name}
                    description = {CricketerData[3].description}
                    image = {CricketerData[3].image}
                />
                <Cricket 
                    name = {CricketerData[4].name}
                    description = {CricketerData[4].description}
                    image = {CricketerData[4].image}
                />
            </ul>
        </>
    )
}

export default App;