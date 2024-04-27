import Stack from "@mui/material/Stack";
import SearchBar from "./SearchBar";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    p={2}
    sx={{
      background: "#FFF3E2",
      position: "sticky",
      top: 0,
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
