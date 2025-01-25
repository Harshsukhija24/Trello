import { Button, Typography, Box, AppBar, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "grey",
          }}
        >
          <Button
            onClick={() => navigate("/")}
            style={{
              fontFamily: "sans-serif",
              fontSize: "16px",
              fontWeight: "bolder",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              position: "absolute",
              left: "16px",
              display: "flex",
              justifyContent: "center",
              filter: "grayscale(104%) brightness(105%) contrast(100%)",
              alignItems: "center",
              gap: "10px",
            }}
            color="inherit"
          >
            <Box component="span">
              <img
                src="/Trello.jpeg"
                alt="Trello-Logo"
                style={{
                  width: "30px",
                  height: "30px",

                  filter: "brightness(130%) contrast(70%)",
                  marginBottom: "-8px",
                }}
              />
            </Box>
            Boards
          </Button>

          <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center" }}>
            <Box
              onClick={() => navigate("/")}
              component="span"
              sx={{ display: "inline-block" }}
            >
              <img
                src="/Trello.jpeg"
                alt="Trello-Logo"
                style={{
                  width: "60px",
                  height: "50px",
                  alignItems: "center",
                  justifyContent: "center",
                  filter: "grayscale(104%) brightness(105%) contrast(100%)",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
