import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        border: "1px solid #e3e3e3",
        borderRadius: 20,
        boxShadow: "none",
        pl: 2,
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "#E74646" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
