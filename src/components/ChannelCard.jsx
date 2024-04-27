import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import demoProfile from "../assets/images/demo-profile.png";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "356px", md: "320px" },
      height: "326px",
      margin: "auto",
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#000",
        }}
      >
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfile}
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #E3E3E3",
          }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{" "}
          <CheckCircleIcon
            sx={{ fontSize: "14px", color: "#808080", ml: "5px" }}
          />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography
            sx={{ fontSize: "15px", fontWeight: 500, color: "#808080" }}
          >
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString("en-US")}{" "}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
