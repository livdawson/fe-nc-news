import { Dialog, DialogContent } from "@mui/material";
import { useState } from "react";

export default function ConfirmBox({ open, onClose, onDelete }) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <Dialog className="custom-dialog" open={open} onClose={onClose}>
      <DialogContent className="confirm-box">
      { !confirmed ? 
        <div>
        <p>Are you sure you want to delete this comment?</p>
          <button id="confirm-button" onClick={() => setConfirmed(true)}>
            Confirm
          </button>
          <button onClick={onClose}>Cancel</button>
        </div> 
        : 
        <div>
        <p>✅ Your comment has been deleted!</p>
        <button onClick={onDelete}>Back</button>
        </div>}
      </DialogContent>
    </Dialog>
  );
}
