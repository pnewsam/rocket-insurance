import React from "react";
import { formatCurrency } from "../../utils";

const VariableOption = ({ handleChange, name, data }) => {
  const { title, description, values } = data;
  return (
    <div className="field">
      <label className="label">
        <p>{title}</p>
        <p className="help">{description}</p>
      </label>
      <div className="select">
        <select name={name} onChange={handleChange}>
          {values.map((value) => (
            <option key={value} value={value}>
              {formatCurrency(value, 0)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VariableOption;
