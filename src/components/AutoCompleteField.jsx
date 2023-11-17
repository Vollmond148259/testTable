import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function AutoCompleteField(props) {
  const { items, onChange } = props;
  return (
    <Autocomplete
      disablePortal
      size={"small"}
      onChange={onChange}
      options={items}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country" />}
    />
  );
}

export default AutoCompleteField;
