import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchVotes } from "../Utils/api";

export default function VoteOnArticle({votes, setVotes}) {
    const [error, setError] = useState(null);

    const { article_id } = useParams();
    
    const isNegative = votes.toString().startsWith("-");

    function handleUpvote() {
        setVotes((prevVotes) => prevVotes + 1)
        patchVotes(article_id, 1)
        .then(() => {
            setError(null)
        })
        .catch((err) => {
            setVotes((prevVotes) => prevVotes - 1)
            setError(err.msg)
        })
    }

    function handleDownvote() {
        setVotes((prevVotes) => prevVotes - 1)
        patchVotes(article_id, -1)
        .then(() => {
            setError(null)
        })
        .catch((err) => {
            setVotes((prevVotes) => prevVotes + 1)
            setError(err.msg)
        })
    }

    return (
        <div>
        <button className="vote-button" onClick={() => handleUpvote()}>⬆️ {isNegative ? null : `${votes}`}</button>
        <button className="vote-button" onClick={() => handleDownvote()}>⬇️ {isNegative ? `${-votes}` : null}</button>
        { error ? <p>Something went wrong, please try again.</p> : null}
        </div>
    )
}