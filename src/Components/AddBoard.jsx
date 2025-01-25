import { Card, CardContent, Typography, Dialog } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import AddBoardDetail from "./AddBoardDetail";

const AddBoard = ({ handleReload }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ borderRadius: 5 }} onClick={handleOpen}>
        <CardContent
          sx={{
            height: 170,
            backgroundImage: `url(./mountain.jpeg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: 240,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography sx={{ color: "white" }} variant="h5">
            <Typography variant="h5" sx={{}}>
              Add Board
            </Typography>
            <AddIcon
              sx={{ width: 40, height: 40, marginLeft: 5 }}
              fontSize="large"
            />
          </Typography>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <AddBoardDetail handleClose={handleClose} handleReload={handleReload} />
      </Dialog>
    </>
  );
};

export default AddBoard;
