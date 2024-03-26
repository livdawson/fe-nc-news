import { Dialog, DialogContent } from "@mui/material";

export default function FeedbackPopUp({open, onClose, text}) {
  return (
    <Dialog className="custom-dialog" open={open} onClose={onClose}>
      <DialogContent className="feedback-pop-up">
        <p>{text}</p>
        <div>
          <button onClick={onClose}>Back</button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
