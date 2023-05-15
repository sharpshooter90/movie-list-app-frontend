import { Box, Container } from "@mui/material";

import "./App.css";
import Header from "./components/Header";
import Movies from "./container/Movies";

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="false">
        <Box component="main" sx={{ pt: 6 }}>
          <Movies />
        </Box>
      </Container>
    </div>
  );
}

export default App;
