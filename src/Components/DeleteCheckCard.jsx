import ClearIcon from "@mui/icons-material/Clear";
import { Box } from "@mui/material";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

const DeleteCheckCard = ({ id }) => {
  const handleDelete = async (event) => {
    event.stopPropagation();
    try {
      const response = await fetch(
        `${baseUrl}/checklists/${id}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to delete card with ID: ${id}`);
      }
    } catch (error) {
      throw new Error("Error deleting card:", error);
    }
  };

  return (
    <Box>
      <ClearIcon onClick={handleDelete} sx={{ cursor: "pointer" }} />
    </Box>
  );
};

export default DeleteCheckCard;
