import DeleteCommentButton from "./DeleteCommentButton";

export default function CommentCard({comment, body, author, created_at, votes, comment_id, setComments, setCommentDeleted}) {
    
    const isNegative = votes.toString().startsWith("-");
    
    const date = new Date(created_at);
    const formattedDate = date.toLocaleDateString('en-GB');

    return (
        <section className="comment-card">
            <div className="comment-header">
            <h4>👤 {author}</h4>
            <h4>{formattedDate}</h4>
            </div>
            <p>{body}</p>
            <button>
                {isNegative ? `⬇️ ${-votes}` : `⬆️ ${votes}`}
            </button>
            <DeleteCommentButton comment={comment} author={author} comment_id={comment_id} setComments={setComments} setCommentDeleted={setCommentDeleted}/>
        </section>
    )
}