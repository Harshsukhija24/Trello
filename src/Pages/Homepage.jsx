import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

import AddBoard from "../Components/AddBoard";

const Homepage = () => {
  const Navigate = useNavigate();
  const [boardData, setBoardData] = useState([]);
  const [reloadBoards, setReloadBoards] = useState(false);

  useEffect(() => {
    async function fetchBoard() {
      try {
        const res = await fetch(
          `${baseUrl}/members/me/boards?key=${apiKey}&token=${apiToken}`
        );

        const data = await res.json();
        setBoardData(data);
      } catch (error) {
        throw new Error("Error fetching board data:", error);
      }
    }

    fetchBoard();
  }, [reloadBoards]);
  const handleReload = () => {
    setReloadBoards((prev) => !prev);
  };

  return (
    <>
      <Typography variant="h3" sx={{ marginLeft: 5 }}>
        My boards
      </Typography>

      <Box
        component="section"
        sx={{
          display: "flex",
          marginLeft: 5,
          marginTop: 5,
          justifyContent: "start",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <AddBoard handleReload={handleReload} />
        {boardData.length > 0
          ? boardData.map((board) => (
              <Card sx={{ borderRadius: 5 }} key={board.id}>
                <CardContent
                  sx={{
                    backgroundImage: `url(${
                      board.prefs.backgroundImage || "/mountain.jpeg"
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "start",
                    height: 170,
                    backgroundColor: "black",
                    width: 240,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => Navigate(`/${board.id}`)}
                >
                  <Typography
                    sx={{ marginBottom: 18, marginRight: 10 }}
                    variant="h5"
                    color="white"
                  >
                    {board.name}
                  </Typography>
                </CardContent>
              </Card>
            ))
          : "Loading..."}
      </Box>
    </>
  );
};

export default Homepage;
