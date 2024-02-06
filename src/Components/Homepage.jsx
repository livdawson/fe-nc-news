import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <section className="homepage-container">
        <h2>...where knowledge meets engagement</h2>
        <p id="homepage-text"> Here you can explore an array of articles spanning different topics, all written by our vibrant community of users. Whether you're here to read, vote, or join the conversation, our platform invites you to dive into a world of information and ideas.
        </p>
        <Link to="/articles">
        <button className="go-to-articles-button">Dive into our articles</button>
        </Link>
        </section>
    )
}