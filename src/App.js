import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Player from './components/Player';
import Ipl from './components/Ipl';
import Cricket from './components/Cricket';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
return(
    <>
    <BrowserRouter>
    <Header />
    <div className='container'>
        <Routes>
            <Route path = "/" element = {<Cricket/>}></Route>
            <Route path = "/player" element = {<Player/>}></Route>
            <Route path = "/ipl" element = {<Ipl/>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
    </>
)
}

export default App