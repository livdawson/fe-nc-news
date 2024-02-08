import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import { getUsers, postComment } from "../Utils/api";
import { useParams } from "react-router-dom";

export default function NewComment({ addCommentOpen, setComments }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserIcon, setSelectedUserIcon] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [usersLoadingError, setUsersLoadingError] = useState(null);
  const [commentPostingError, setCommentPostingError] = useState(null);
//   const [commentSubmitted, setCommentSubmitted] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch((err) => {
        setUsersLoadingError(err.msg);
      });
  }, []);

  const options = users.map((user) => ({
    value: user.username,
    label:
        <React.Fragment key={user.username}>
        <img
          className="user-avatar"
          src={user.avatar_url}
          alt={`avatar icon for ${user.name}`}
          />
        {user.name}
        </React.Fragment>
  }));

  function handleLogin(selectedUser) {
    setSelectedUser(selectedUser.value);
    setSelectedUserIcon(selectedUser.label);
  }

  function handleSubmit(event) {
      event.preventDefault()
      const newComment = {body: commentInput, author: selectedUser, created_at: Date.now(), votes: 0, comment_id: selectedUser}
      setComments((prevComments) => [...prevComments, newComment]);
      postComment(article_id, selectedUser, commentInput)
      .then(() => {
        setCommentInput("");
        setCommentPostingError(null);
      })
      .catch((err) => {
        setComments((prevComments) => prevComments.filter((comment) => comment !== newComment))
        setCommentPostingError(err.msg)
      })
    }

    return (
      <section className="add-comment-box">
        {addCommentOpen ? (
          <form onSubmit={handleSubmit}>
            {usersLoadingError ? <p>Sorry, we're unable to load users at this time.</p> :
            <section>
            {isLoading ? <p>Fetching users...</p> :
            <section> 
            <label htmlFor="select-user">Select a user:</label>
            <Select className="user-options"
              name="select-user"
              id="select-user"
              value={selectedUser}
              onChange={handleLogin}
              options={options}
            />
            {!selectedUser ? null : (
              <div>
                <span className="logged-in-user-container">
                  <p>Logged in as: {selectedUserIcon}</p>
                </span>
                <label htmlFor="comment-body"></label>
                <textarea
                  id="comment-body"
                  name="comment-body"
                  placeholder="Add a comment..."
                  value={commentInput}
                  onChange={(event) => setCommentInput(event.target.value)}
                  required
                ></textarea>
                <button type="submit" id="submit-comment-button">
                  Submit
                </button>
              </div>
            )}
          { commentPostingError ? <p>Something went wrong, please try again</p> : null}
          </section> }
          </section>}
          </form>
        ) : null }
      </section>
    )
  }
