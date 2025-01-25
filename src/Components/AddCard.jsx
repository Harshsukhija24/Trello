import { Box, Input } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

const AddCard = ({ id, onCardAdded }) => {
  const [cardName, setCardName] = useState("");

  async function addCard(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        `${baseUrl}/cards?idList=${id}&key=${apiKey}&token=${apiToken}&name=${cardName}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      setCardName("");
      onCardAdded();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={addCard}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "2px solid #1976d2",
          borderRadius: "8px",
          marginTop: "6px",
          padding: "4px 8px",
          backgroundColor: "#f5f5f5",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <AddIcon
          sx={{ color: "#1976d2", marginRight: "8px", cursor: "pointer" }}
        />
        <Input
          sx={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: "16px",
            color: "#333",
          }}
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="Add new Card"
          disableUnderline={true}
        />
      </Box>
    </form>
  );
};

export default AddCard;
