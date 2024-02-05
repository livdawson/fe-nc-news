import { Link } from "react-router-dom";

export default function Navigation () {
    return (
        <nav>
            <Link to="/">
            <button className="home-button">Back to Home</button>
            </Link>
        </nav>
    )
}