import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Players from './Components/Players';
import { Route, Routes, Link } from 'react-router-dom';
import PlayerDetail from './Components/PlayerDetail';
import NotFound from './Components/NotFound';
function App(){
    return(
        <div className="App">
            <ul>
                <li><Link to='/' style={{textDecoration: 'none'}}>Home</Link></li>
                <li><Link to='/about' style={{textDecoration: 'none'}}>About</Link></li>
                <li><Link to='/players' style={{textDecoration: 'none'}}>Players</Link></li>
            </ul>
            <hr/>
            <Routes>
                <Route path = "/" element = {   <Home />  } />
                <Route path = "/about" element = {   <About /> } />
                <Route path = "/players" element = {   <Players /> } >
                    <Route path=":id" element = {<PlayerDetail /> } />
                </Route>
                <Route path = '*' element = {<NotFound />} />

                {/* //which will recieve all the parameters passed into the URL */}
            </Routes>
   
        </div>
    )
}
export default App


//<a href
//<link to