import { useContext } from "react";
import UserContext from "../Shared/UserContext";

export default function UserCard({ user }) {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    return (
        <div className={user.username === loggedInUser.username ? "current-user" : ""}>
            <p>{user.username}</p>
            <img src={user.avatar_url} alt={`avatar for user {user.username}/`}/>
            {user.username !== loggedInUser.username ? <button onClick={() => setLoggedInUser(user)}>Log in</button> : null }
        </div>
    )
}