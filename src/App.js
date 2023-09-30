import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TopBar from "./layout/TopBar";
import Index from "./view/Index";
import Create from "./view/Create";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © Atakan Yılmaz "} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <TopBar />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Index />} />
                <Route path="create" element={<Create />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Case Study
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}

export default App;
