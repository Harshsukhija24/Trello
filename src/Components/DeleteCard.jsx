import ClearIcon from "@mui/icons-material/Clear";
import { Box } from "@mui/material";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

const DeleteCard = ({ id, onDelete }) => {
  const handleDelete = async (event) => {
    event.stopPropagation();
    try {
      const response = await fetch(
        `${baseUrl}/cards/${id}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
        }
      );
      onDelete();
    } catch (error) {
      console.log("Error deleting card:", error);
    }
  };

  return (
    <Box>
      <ClearIcon onClick={handleDelete} sx={{ cursor: "pointer" }} />
    </Box>
  );
};

export default DeleteCard;
