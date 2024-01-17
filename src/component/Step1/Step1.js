import React from "react";
import TextField from "@material-ui/core/TextField";

const Step1 = ({ formData, handleChange }) => (
  <div>
    <TextField
      label="Name"
      value={formData.name}
      onChange={(e) => handleChange("name", e.target.value)}
    />
  </div>
);

export default Step1;
