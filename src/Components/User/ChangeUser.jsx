import { Dialog, DialogContent } from "@mui/material";
import Users from "./Users";

export default function ChangeUser({open, onClose}) {

  return (
    <Dialog className="custom-dialog" open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent className="change-user-box">
        <h2>Change User</h2>
        <Users />
        <button className="close-dialog-button" onClick={onClose}>Close</button>
      </DialogContent>
    </Dialog>
  );
}
