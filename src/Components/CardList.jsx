import { Box, Typography } from "@mui/material";
import AddCheckList from "./AddCheckList";
import DisplayCheckList from "./DisplayCheckList";

const CardList = ({ id }) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ display: "flex", ml: 3, justifyContent: "center" }}
      >
        Add CheckList
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          width: 500,
          p: 2,
          height: 500,
        }}
      >
        <Box sx={{ width: 300 }}>
          <DisplayCheckList id={id} />
        </Box>
        <Box sx={{ borderLeft: "2px solid black", height: 500 }}>
          <AddCheckList id={id} />
        </Box>
      </Box>
    </>
  );
};

export default CardList;
