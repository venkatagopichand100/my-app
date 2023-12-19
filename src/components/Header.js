import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-blue border-bottom">
            <h4 className="my-0 mr-md-auto font-weight-normal">Cricket Application</h4>
            <nav className="my-2 my-md-auto mr-md-3">
                <Link className="p-2 text-dark" to = "/">Cricket</Link>
                <Link className="p-2 text-dark" to = "/Player">Player</Link>
                <Link className="p-2 text-dark" to = "/Ipl">IPL</Link>
            </nav>
        </div>
    )
}
export default Header
