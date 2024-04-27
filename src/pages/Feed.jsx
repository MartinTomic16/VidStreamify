import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const date = new Date().getFullYear();
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setVideos(null);

      const response = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );

      setVideos(response.items);
    };

    fetchVideos();
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #ccc2b4",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#000" }}
        >
          Copyright © {date} Martin Tomić
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#000" }}
        >
          {selectedCategory} <span style={{ color: "#E74646" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
