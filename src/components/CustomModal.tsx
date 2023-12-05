import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

interface Props {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}

export const CustomModal = ({ open, onClose, children }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent
        sx={{
          background:
            "linear-gradient(to right, rgba(254,173,166,0.5), rgba(245,239,239,0.5))",
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};
