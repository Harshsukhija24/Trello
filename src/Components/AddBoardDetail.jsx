import { Box, Input, Typography, Button } from "@mui/material";
import { useState } from "react";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

const AddBoardDetail = ({ handleClose, handleReload }) => {
  const [boardName, setBoardName] = useState("");

  const addBoard = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/boards/?name=${boardName}
        &key=${apiKey}&token=${apiToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setBoardName("");
      handleClose();
      handleReload();
    } catch (error) {
      throw new Error("Error adding board:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid black",
        width: 300,
        height: 300,
        backgroundColor: "#1d2125",
        color: "white",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 6 }}>
        Add New Board
      </Typography>
      <Typography sx={{ marginBottom: 2 }} variant="h6">
        Add Name For New board
      </Typography>
      <Input
        type="text"
        sx={{
          marginBottom: 10,
          color: "white",
          border: "2px solid white",
        }}
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
        placeholder="Add board name here"
      />
      <Button
        variant="contained"
        disableElevation
        disableFocusRipple
        color="primary"
        onClick={addBoard}
        style={{ marginLeft: "10px" }}
      >
        Add Board
      </Button>
    </Box>
  );
};

export default AddBoardDetail;
