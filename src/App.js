import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Players from './Components/Players';
import { Route, Routes, Link, useRoutes } from 'react-router-dom';
import PlayerDetail from './Components/PlayerDetail';
import NotFound from './Components/NotFound';
import Form from './Components/Form';
function App(){
    let routeElements = useRoutes([
        {
            path: '/',
            children: [
                {
                    index: true,
                    element: <Home /> 
                },
                {
                    path: '/about',
                    element: <About /> 
                },
                {
                    path: '/Players',
                    element: <Players />,
                    children:[
                        {
                            path: ":id",
                            element: <PlayerDetail />
                        }
                    ] 
                },
                {
                    path: '/form',
                    element: <Form /> 
                },
                {
                    path: '*',
                    element: <NotFound />
                }
            ]
        }
    ])
    return(
        <div className="App">
            <ul>
                <li><Link to='/' style={{textDecoration: 'none'}}>Home</Link></li>
                <li><Link to='/about' style={{textDecoration: 'none'}}>About</Link></li>
                <li><Link to='/players' style={{textDecoration: 'none'}}>Players</Link></li>
                <li><Link to='/form' style={{textDecoration: 'none'}}>Form</Link></li>
            </ul>
            <hr/>
            {/* <Routes>
                <Route path = "/">
                    <Route index element = {   <Home />  } />
                    <Route path = "/about" element = {   <About /> } />
                    <Route path = "/players" element = {   <Players /> } />
                        <Route index path=":id" element = {<PlayerDetail /> } />
                    </Route>
                    <Route path = '*' element = {<NotFound />} />
                </Route> */}

                {/* //which will recieve all the parameters passed into the URL */}
            {/* </Routes> */}
        {routeElements}
        </div>
    )
}
export default App


//<a href
//<link to