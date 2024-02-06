import { Link } from "react-router-dom";

export default function ErrorPage({ message }) {
    return (
        <section>
        <p>{message}</p>
        <Link to="/">
        <button className="error-return-home-button">Return to home</button>
        </Link>
        </section>
    )
}