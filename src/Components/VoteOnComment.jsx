import { useState } from "react";
import { patchCommentVotes } from "../Utils/api";

export default function VoteOnComment({ comment_id, existingVotes }) {
    const [votes, setVotes] = useState(existingVotes);
    const [error, setError] = useState(null);

    function handleUpvote() {
        setVotes((prevVotes) => prevVotes + 1)
        patchCommentVotes(comment_id, 1)
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
        patchCommentVotes(comment_id, -1)
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
        <button className="vote-button" onClick={() => handleUpvote()}>⬆️</button>
        {votes}
        <button className="vote-button" onClick={() => handleDownvote()}>⬇️</button>
        { error ? <p>Something went wrong, please try again.</p> : null}
        </div>
    )
}