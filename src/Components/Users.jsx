import { useState, useEffect } from "react";
import { getUsers } from "../Utils/api";
import UserCard from "./UserCard";
import Error from "./Error";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then((userData) => {
        setUsers(userData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.msg);
      });
  }, []);

  if (error) {
    return <Error message={"Sorry, we're unable to load users at this time"} />;
  } else {
    return (
      <main>
        {isLoading ? (
          <p>Fetching users...</p>
        ) : (
          <ul className="users-list">
            {users.map((user) => {
              return (
                <li key={user.username}>
                  <UserCard user={user} />
                </li>
              );
            })}
          </ul>
        )}
      </main>
    );
  }
}
