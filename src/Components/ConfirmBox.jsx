import { Dialog, DialogContent } from "@mui/material";

export default function ConfirmBox({ open, onClose, onDelete }) {
  return (
    <Dialog className="custom-dialog" open={open} onClose={onClose}>
      <DialogContent className="confirm-box">
        <p>Are you sure you want to delete this comment?</p>
        <div>
          <button id="confirm-button" onClick={onDelete}>
            Confirm
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
