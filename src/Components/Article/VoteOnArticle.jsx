import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchArticleVotes } from "../../Utils/api";

export default function VoteOnArticle({votes, setVotes}) {
    const [error, setError] = useState(null);

    const { article_id } = useParams();

    function handleUpvote() {
        setVotes((prevVotes) => prevVotes + 1)
        patchArticleVotes(article_id, 1)
        .then(() => {
            setError(null)
        })
        .catch((err) => {
            setVotes((prevVotes) => prevVotes - 1)
            setError(err)
        })
    }

    function handleDownvote() {
        setVotes((prevVotes) => prevVotes - 1)
        patchArticleVotes(article_id, -1)
        .then(() => {
            setError(null)
        })
        .catch((err) => {
            setVotes((prevVotes) => prevVotes + 1)
            setError(err)
        })
    }

    return (
        <div>
        <b>Votes:</b>
        <button className="vote-button" onClick={() => handleUpvote()}>⬆️</button>
        {votes}
        <button className="vote-button" onClick={() => handleDownvote()}>⬇️</button>
        { error ? <p>Something went wrong, please try again.</p> : null}
        </div>
    )
}