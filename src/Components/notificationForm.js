import {
  Box,
  Button,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import "../Css/homePage.css";

function notificationForm() {
  return (
    <Box sx={{ mt: 8 }} className="notification_box">
      <Typography variant="h6" component="h4" sx={{ color: "white", mb: 1 }}>
        Some of the best teams are already transforming their management
      </Typography>
        <Paper
          component="form"
          sx={{
            mx: 3,
            display: "flex",
            alignItems: "center",
            width: "auto",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Your email address..."
          />
          <Button
            type="button"
            sx={{ m: "8px" }}
            variant="contained"
            color="secondary"
          >
            Join Us
          </Button>
        </Paper>
    </Box>
  );
}

export default notificationForm;
