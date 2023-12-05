import { Link, Outlet } from "react-router-dom";
const Players = () => {
    return (
        <div>
         <ul>
                <li><Link to='/players/1' style={{textDecoration: 'none'}}>Sachin</Link></li>
                <li><Link to='/players/2' style={{textDecoration: 'none'}}>Dravid</Link></li>
                <li><Link to='/players/3' style={{textDecoration: 'none'}}>Laxman</Link></li>
                <li><Link to='/players/4' style={{textDecoration: 'none'}}>Rohit</Link></li>
                <li><Link to='/players/5' style={{textDecoration: 'none'}}>Virat</Link></li>
            
            </ul>
            <Outlet />
        {/* to show the child routes into our application we have to use <Outlet /> */}
        </div>
    )
}
export default Players;