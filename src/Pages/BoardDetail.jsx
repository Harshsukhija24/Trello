import { Box, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

import AddList from "../Components/AddList";
import DisplayCard from "../Components/DisplayCard";
import AddCard from "../Components/AddCard";
import ArchiveList from "../Components/ArchiveList";

const BoardDetail = () => {
  const { id } = useParams();
  const [allList, setAllList] = useState([]);
  const [reload, setReload] = useState(false);

  const triggerReload = () => {
    setReload((prev) => !prev);
  };

  useEffect(() => {
    async function fetchDataByID() {
      try {
        const res = await fetch(
          `${baseUrl}/boards/${id}/lists/?key=${apiKey}&token=${apiToken}`
        );
        const data = await res.json();
        setAllList(data);
      } catch (error) {
        throw new Error("Error fetching data:", error);
      }
    }

    fetchDataByID();
  }, [id, reload]);

  return (
    <Box
      sx={{
        padding: 4,
        overflowX: "scroll",
        minHeight: "91vh",
        backgroundImage: `url("https://images.unsplash.com/photo-1737044280473-06976eb5fda5?ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzM3NDMyNjE1fA&ixlib=rb-4.0.3&w=2560&h=2048&q=90")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 3, color: "white " }}>
        All Lists
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {allList.map((singleList) => (
          <Card
            key={singleList.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              marginRight: 2,
              marginBottom: 2,
              padding: 1,
              alignItems: "space-between",
              minWidth: 250,
              minHeight: 150,
              borderRadius: 6,
              backgroundColor: "#ebf3f1",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">{singleList.name}</Typography>
              <ArchiveList
                id={singleList.id}
                sx={{ marginLeft: 13, marginTop: 0 }}
                triggerReload={triggerReload}
              />
            </CardContent>

            <DisplayCard id={singleList.id} triggerReload={triggerReload} />
            <AddCard id={singleList.id} onCardAdded={triggerReload} />
          </Card>
        ))}
        <AddList onCardAdded={triggerReload} />
      </Box>
    </Box>
  );
};

export default BoardDetail;
