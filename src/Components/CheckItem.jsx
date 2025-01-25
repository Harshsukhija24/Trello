import { Box, Typography, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";

import Progressbar from "./Progressbar";
import DeleteCheckList from "./DeleteCheckList";
import AddCheckItem from "./AddCheckItem";
const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

const CheckItem = ({ id }) => {
  const [checkItems, setCheckItems] = useState([]);
  const [progress, setProgress] = useState(0);
  const [reload, setReload] = useState(false);

  const triggerReload = () => {
    setReload((prev) => !prev);
  };

  const calculateProgress = (items) => {
    const completed = items.filter((item) => item.state === "complete").length;
    const total = items.length;
    return total > 0 ? (completed / total) * 100 : 0;
  };

  useEffect(() => {
    async function getCheckItems() {
      try {
        const response = await fetch(
          `${baseUrl}/checklists/${id}/checkItems?key=${apiKey}&token=${apiToken}`
        );
        const data = await response.json();
        setCheckItems(data);
        setProgress(calculateProgress(data));
      } catch (error) {
        console.error(error);
      }
    }
    getCheckItems();
  }, [id, reload]);

  const handleToggle = (itemId) => {
    setCheckItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              state: item.state === "complete" ? "incomplete" : "complete",
            }
          : item
      )
    );
  };

  useEffect(() => {
    setProgress(calculateProgress(checkItems));
  }, [progress, checkItems]);

  return (
    <Box
      sx={{ padding: "16px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}
    >
      <Box sx={{ marginBottom: "16px" }}>
        <Progressbar value={progress} />
      </Box>

      {checkItems.length > 0 ? (
        checkItems.map((item) => (
          <Box
            key={item.id}
            display="flex"
            alignItems="center"
            sx={{
              mb: 1,
              padding: "8px",
              backgroundColor: "#fff",
              borderRadius: "4px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Checkbox
              checked={item.state === "complete"}
              onChange={() => handleToggle(item.id)}
              sx={{ marginRight: "8px" }}
            />
            <Typography variant="body1" sx={{ flexGrow: 1, color: "#333" }}>
              {item.name}
            </Typography>
            <DeleteCheckList
              triggerReload={triggerReload}
              id={id}
              keyid={item.id}
            />
          </Box>
        ))
      ) : (
        <Typography variant="body2" sx={{ color: "#777", textAlign: "center" }}>
          No check items available
        </Typography>
      )}

      <Box
        sx={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AddCheckItem triggerReload={triggerReload} id={id} />
      </Box>
    </Box>
  );
};

export default CheckItem;
