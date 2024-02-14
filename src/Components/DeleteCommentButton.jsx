import { useContext, useState } from "react";
import UserContext from "./UserContext";
import { deleteComment } from "../Utils/api";
import ConfirmBox from "./ConfirmBox";

export default function DeleteCommentButton({
  comment,
  author,
  comment_id,
  setComments,
}) {
  const { loggedInUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  function handleDelete() {
    setComments((prevComments) =>
      prevComments.filter((currentComment) => currentComment !== comment)
    );
    deleteComment(comment_id)
      .then(() => {
        setOpenDialog(false);
        setError(null);
      })
      .catch((err) => {
        setComments((prevComments) => [...prevComments, comment]);
        setError(err.msg);
      });
  }

  return (
    <div>
      {loggedInUser.username === author ? (
        <button onClick={() => setOpenDialog(true)}>Delete</button>
      ) : null}
      {error ? <p>Sorry, we cannot delete your comment at this time</p> : null}
      <ConfirmBox
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onDelete={handleDelete}
      />
    </div>
  );
}
