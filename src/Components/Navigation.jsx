import { Link } from "react-router-dom";

export default function Navigation () {
    return (
        <nav className="nav-bar">
            <Link to="/">
            <button className="nav-bar-button">Home</button>
            </Link>
            <Link to="/articles">
            <button className="nav-bar-button">All Articles</button>
            </Link>
        </nav>
    )
}