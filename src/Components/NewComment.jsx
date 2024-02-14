import { useState, useContext } from "react";
import { postComment } from "../Utils/api";
import { useParams } from "react-router-dom";
import UserContext from "./UserContext";
import FeedbackPopUp from "./FeedbackPopUp";

export default function NewComment({ setComments }) {
  const [commentInput, setCommentInput] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const { loggedInUser } = useContext(UserContext);
  const username = loggedInUser.username;
  const { article_id } = useParams();

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true)
    const newComment = {
      body: commentInput,
      author: username,
      created_at: Date.now(),
      votes: 0,
      comment_id: username,
    };
    setComments((prevComments) => [...prevComments, newComment]);
    setOpenDialog(true);
    postComment(article_id, username, commentInput)
      .then(() => {
        setCommentInput("");
        setIsSubmitted(false);
        setError(null);
      })
      .catch((err) => {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment !== newComment)
        );
        setError(err.msg);
      });
  }

  return (
    <section className="add-comment-box">
      <form onSubmit={handleSubmit}>
          <label htmlFor="comment-body"></label>
          <textarea
            id="comment-body"
            name="comment-body"
            placeholder="Add a comment..."
            value={commentInput}
            onChange={(event) => setCommentInput(event.target.value)}
            required
          ></textarea>
        <button type="submit" id="submit-comment-button" disabled={isSubmitted}>
          Submit
        </button>
        {error ? (
          <p>Something went wrong, please try again</p>
        ) : null}
      </form>
      <FeedbackPopUp open={openDialog}
        onClose={() => setOpenDialog(false)}
        text={"✅ Your comment has been added!"}/>
    </section>
  );
}
