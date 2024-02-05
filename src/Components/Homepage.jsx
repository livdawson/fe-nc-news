import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <>
        <p className="homepage-text"> Welcome to our community-driven platform, where knowledge meets engagement. Here you can explore articles spanning different topics, all written by our vibrant community of users. Whether you're here to read, vote, or join the conversation, our platform invites you to dive into a world of information and ideas.
        </p>
        <Link to="/articles">
        <button className="go-to-articles-button">Dive into our articles</button>
        </Link>
        </>
    )
}