import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsForArticle } from "../Utils/api";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";
import Expandable from "./Expandable";
import Error from "./Error";

export default function CommentList() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    getCommentsForArticle(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [article_id, comments]);

  if (error) {
    return (
      <Error
        message={"Sorry, we're unable to load comments at this time"}
      />
    );
  } else {
    return (
      <section>
        {isLoading ? (
          <p>Fetching comments...</p>
        ) : (
          <section className="article-comments">
            <h3>Comments</h3>
            <Expandable showButton={"+ Add a comment"}>
                <NewComment setComments={setComments}/>
            </Expandable>
            {comments.length === 0 ? (
                <p>No comments yet</p>
                ) : (
                    comments.map((comment) => {
                        return (
                            <CommentCard
                            key={comment.comment_id}
                            comment={comment}
                            body={comment.body}
                            author={comment.author}
                            created_at={comment.created_at}
                            votes={comment.votes}
                            comment_id={comment.comment_id}
                            setComments={setComments}
                    />
                    );
              })
            )}
          </section>
        )}
      </section>
    );
  }
}
