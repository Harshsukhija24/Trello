import { Box, Dialog, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;

import DeleteCard from "./DeleteCard";
import CardList from "./CardList";

const DisplayCard = ({ id, triggerReload }) => {
  const [open, setOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const handleOpen = (cardId) => {
    setSelectedCardId(cardId);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const displayCards = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/lists/${id}/cards?key=${apiKey}&token=${apiToken}`
        );

        const data = await response.json();
        setCards(data);
      } catch (error) {
        throw new Error("Error fetching cards:", error);
      }
    };

    displayCards();
  }, [triggerReload, id]);

  return (
    <>
      <Box>
        {cards.length > 0 ? (
          cards.map((card) => (
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
              }}
              key={card.id}
              variant="h6"
            >
              {card.name}

              {card.name && (
                <ModeEditOutlineIcon
                  sx={{ position: "absolute", right: 30, top: 1 }}
                  onClick={() => handleOpen(card.id)}
                />
              )}
              {card.name && (
                <DeleteCard id={card.id} onDelete={triggerReload} />
              )}
            </Typography>
          ))
        ) : (
          <Typography>No cards available</Typography>
        )}
      </Box>

      <Dialog open={open} onClose={handleClose} sx={{ minWidth: "xl" }}>
        {selectedCardId && <CardList id={selectedCardId} />}{" "}
      </Dialog>
    </>
  );
};

export default DisplayCard;
