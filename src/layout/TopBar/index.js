import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function TopBar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <IconButton color="inherit" href="/">
              <HomeIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit" href="/create">
              <AddCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
