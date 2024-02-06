export default function CommentCard({body, author, created_at, votes}) {
    
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
        </section>
    )
}