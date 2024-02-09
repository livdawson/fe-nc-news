import { useState, useContext } from "react";
import ChangeUser from "./ChangeUser";
import UserContext from "./UserContext";

export default function CurrentUser({className}) {
    const { loggedInUser } = useContext(UserContext);
    const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className={className}>
      <p>Current user: {loggedInUser.username}</p>
      <img
        id="current-user-avatar"
        src={loggedInUser.avatar_url}
        alt={`avatar for user {loggedInUser.username}`}
      />
      <button onClick={() => setOpenDialog(true)}>Change User</button>
      <ChangeUser open={openDialog} onClose={() => setOpenDialog(false)} />
    </div>
  );
}
