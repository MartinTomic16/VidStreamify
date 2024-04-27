import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import SearchFeed from "./pages/SearchFeed";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#FFF3E2" }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
