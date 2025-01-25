import { Box, Button, Input, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

const AddListDetail = ({ onCardAdded }) => {
  const { id } = useParams();
  const [name, setName] = useState("");

  const addList = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/lists?name=${name}&idBoard=${id}&key=${apiKey}&token=${apiToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setName("");
      onCardAdded();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
          borderRadius: "10px",
          width: 300,
          marginRight: 1,
          height: "auto",
          backgroundColor: "#ebf3f1",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 3, color: "#1976d2" }}>
          Add New List
        </Typography>
        <Typography
          sx={{
            marginBottom: 2,
            color: "#4a4a4a",
            fontSize: "16px",
            textAlign: "center",
          }}
          variant="subtitle1"
        >
          Add the name of your new list below
        </Typography>
        <Input
          type="text"
          sx={{
            marginBottom: 4,
            padding: "8px 12px",
            width: "100%",
            border: "1px solid #c4c4c4",
            borderRadius: "5px",
            fontSize: "16px",
            color: "#333",
            backgroundColor: "#ffffff",
            "&::placeholder": {
              color: "#a3a3a3",
            },
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter list name"
          disableUnderline={true}
        />
        <Button
          variant="contained"
          disableElevation
          disableFocusRipple
          color="primary"
          onClick={addList}
          sx={{
            padding: "8px 16px",
            fontSize: "16px",
            borderRadius: "5px",
            textTransform: "none",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#155a9c",
            },
          }}
        >
          Add List
        </Button>
      </Box>
    </div>
  );
};

export default AddListDetail;
