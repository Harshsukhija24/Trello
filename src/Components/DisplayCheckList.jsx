import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import CheckItem from "./CheckItem";
import DeleteCheckCard from "./DeleteCheckCard";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

const DisplayCheckList = ({ id }) => {
  const [checkList, setCheckList] = useState([]);

  useEffect(() => {
    async function getAllCheckList() {
      try {
        const response = await fetch(
          `${baseUrl}/cards/${id}/checklists?key=${apiKey}&token=${apiToken}`
        );

        const data = await response.json();
        setCheckList(data);
      } catch (error) {
        throw new Error(error);
      }
    }

    getAllCheckList();
  }, [id, checkList]);

  return (
    <Box
      sx={{ padding: "16px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}
    >
      {checkList.length > 0 ? (
        checkList.map((singleCheckList) => (
          <Box
            key={singleCheckList.id}
            sx={{
              marginBottom: "16px",
              padding: "16px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                {singleCheckList.name}
              </Typography>
              <DeleteCheckCard id={singleCheckList.id} />
            </Box>

            <Typography>
              <CheckItem id={singleCheckList.id} />
            </Typography>
          </Box>
        ))
      ) : (
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "#777", marginTop: "16px" }}
        >
          No checklists available
        </Typography>
      )}
    </Box>
  );
};

export default DisplayCheckList;
