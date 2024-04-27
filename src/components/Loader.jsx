import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => (
  <Box minHeight="95vh">
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <CircularProgress style={{ color: "#E74646" }} />
    </Stack>
  </Box>
);

export default Loader;
