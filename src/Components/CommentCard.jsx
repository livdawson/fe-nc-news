import DeleteCommentButton from "./DeleteCommentButton";
import VoteOnComment from "./VoteOnComment";

export default function CommentCard({comment, body, author, created_at, votes, comment_id, setComments}) {
    
    const date = new Date(created_at);
    const formattedDate = date.toLocaleDateString('en-GB');

    return (
        <section className="comment-card">
            <div className="comment-header">
            <h4>👤 {author}</h4>
            <h4>{formattedDate}</h4>
            </div>
            <p>{body}</p>
            <VoteOnComment comment_id={comment_id} existingVotes={votes}/>
            <DeleteCommentButton comment={comment} author={author} comment_id={comment_id} setComments={setComments}/>
        </section>
    )
}