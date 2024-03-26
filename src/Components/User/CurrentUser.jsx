import { useState, useContext, useEffect } from "react";
import ChangeUser from "./ChangeUser";
import UserContext from "../Shared/UserContext";
import { Avatar } from "@mui/material";

export default function CurrentUser({className}) {
    const { loggedInUser } = useContext(UserContext);
    const [openDialog, setOpenDialog] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);
   
    useEffect(() => {
      const handleResize = () => {
        setSmallScreen(window.innerWidth <= 600);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); 
  
  return (
    <div>
      { !smallScreen ?
      <div className={className}> 
        <Avatar
        className="current-user-avatar"
        src={loggedInUser.avatar_url}
        alt={`avatar for user {loggedInUser.username}`}
        onClick={() => setOpenDialog(true)}
        /> 
      <p>{loggedInUser.username}</p>
      <button onClick={() => setOpenDialog(true)}>Change User</button>
      <ChangeUser open={openDialog} onClose={() => setOpenDialog(false)} />
      </div> : 
      <div className={className}>
      <Avatar
      className="current-user-avatar"
      src={loggedInUser.avatar_url}
      alt={`avatar for user {loggedInUser.username}`}
      onClick={() => setOpenDialog(true)}
      />
      <ChangeUser open={openDialog} onClose={() => setOpenDialog(false)} />
      </div>}
    </div>
  );
}
