import { Box, Button, Input } from "@mui/material";
import { useState } from "react";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

const AddCheckItem = ({ id, triggerReload }) => {
  const [name, setName] = useState("");
  async function addCheckItem() {
    try {
      const response = await fetch(
        `${baseUrl}/checklists/${id}/checkItems?name=${name}&key=${apiKey}&token=${apiToken}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      setName("");
      triggerReload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={addCheckItem}>add checkItem</Button>
    </Box>
  );
};

export default AddCheckItem;
