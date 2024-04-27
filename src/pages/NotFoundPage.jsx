import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <Container
    maxWidth="md"
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "94vh",
    }}
  >
    <Box textAlign="center">
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>
    </Box>
    <Button
      component={Link}
      to="/"
      variant="contained"
      style={{ backgroundColor: "#E74646", color: "#fff", marginTop: "2rem" }}
    >
      Go Back to Home
    </Button>
  </Container>
);

export default NotFoundPage;
