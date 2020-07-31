import React from "react";

const VariableOption = ({ handleChange, name, data }) => {
  const { title, description, values } = data;
  return (
    <div>
      <label>
        <span>{title}</span>
        <br />
        <span>{description}</span>
      </label>
      <br />
      <select name={name} onChange={handleChange}>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VariableOption;
