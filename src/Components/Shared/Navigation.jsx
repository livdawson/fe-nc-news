import { Link } from "react-router-dom";
import CurrentUser from "../User/CurrentUser";

export default function Navigation () {

    return (
        <div>
        <nav className="nav-bar">
            <Link to="/">
            <button className="nav-bar-button">Home</button>
            </Link>
            <Link to="/articles">
            <button className="nav-bar-button">All Articles</button>
            </Link>
        </nav>
        <CurrentUser className={"nav--current-user"}/>
        </div>
    )
}