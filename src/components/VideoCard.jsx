import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: { xs: "100%", sm: "358px", md: "320px" },
      boxShadow: "none",
      borderRadius: 0,
    }}
  >
    <Link to={`/video/${videoId}`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#FFE5CA", height: "106px" }}>
      <Link to={`/video/${videoId}`}>
        <Typography variant="subtitle1" fontWeight="bold" color="#000">
          {snippet?.title.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={`/channel/${snippet?.channelId}`}>
        <Typography variant="subtitle2" color="#808080">
          {snippet?.channelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "#808080", ml: "5px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
