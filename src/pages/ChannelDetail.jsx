import Box from "@mui/material/Box";
import ChannelCard from "../components/ChannelCard";
import Videos from "../components/Videos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchChannel = async () => {
      const channel = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(channel?.items[0]);

      const channelData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideos(channelData?.items);
    };

    fetchChannel();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background: "linear-gradient(135deg, #FFC371 0%, #FF5F6D 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
