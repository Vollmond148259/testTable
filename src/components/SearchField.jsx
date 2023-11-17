import { styled } from "@mui/material/styles";

import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchFieldRoot = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "40ch",
  },
}));

function SearchField(props) {
  const { label, onChange } = props;
  return (
    <SearchFieldRoot>
      <StyledTextField label={label} size={"small"} onChange={onChange} />
    </SearchFieldRoot>
  );
}

export default SearchField;
