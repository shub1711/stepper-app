
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Step2 = ({ formData, handleChange, handleAddressChange }) => (
  <div>
    <Autocomplete
      options={[]}
      getOptionLabel={(option) => option.address}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Address"
          onChange={(e) => handleAddressChange(e.target.value)}
        />
      )}
    />
  </div>
);

export default Step2;
