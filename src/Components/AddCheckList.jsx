import { Button, Input, Box, Typography } from "@mui/material";
import { useState } from "react";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

const AddCheckList = ({ id }) => {
  const [Name, setName] = useState("");

  const handleAddChecklist = async () => {
    if (!Name.trim()) {
      alert("Please enter a checklist name.");
      return;
    }

    try {
      const response = await fetch(
        `${baseUrl}/checklists?idCard=${id}&key=${apiKey}&token=${apiToken}&name=${Name}`,

        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      setName("");
    } catch (error) {
      console.error("Error adding checklist:", error);
      alert("Failed to add checklist. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        gap: "12px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: "8px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Add New Checklist
      </Typography>
      <Input
        value={Name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter checklist name"
        sx={{
          width: "250px",
          fontSize: "14px",
          padding: "6px 0",
        }}
      />
      <Button
        variant="contained"
        onClick={handleAddChecklist}
        sx={{
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "14px",
          padding: "6px 16px",
          textTransform: "none",
        }}
      >
        Add Checklist
      </Button>
    </Box>
  );
};

export default AddCheckList;
