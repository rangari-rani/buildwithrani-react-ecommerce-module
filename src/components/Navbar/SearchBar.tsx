import { useState, type FC } from "react";
import { Box, IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmed = searchText.trim();
    if (trimmed) {
      if (onSearch) {
        onSearch(trimmed);
      } else {
        navigate(`/search?q=${encodeURIComponent(trimmed)}`);
      }
    }
  };

  return (
    <Box
      className="hidden md:flex items-center gap-2 rounded-sm px-3 py-1.5 bg-white shadow-sm w-[200px] lg:w-[280px] border border-gray-300"
    >
      <InputBase
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="text-sm w-full"
        sx={{ color: "#111827" }} 
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton
        type="button"
        size="small"
        onClick={handleSearch}
        aria-label="search button"
        sx={{
          color: "#10B981",
          "&:hover": { color: "#059669" },
        }}
      >
        <Search fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
