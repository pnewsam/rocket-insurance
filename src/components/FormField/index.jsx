import React from "react";

const FormField = ({ errors = [], name, label, onChange }) => (
  <div className="field">
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <input
      className="input"
      type="text"
      name={name}
      onChange={onChange}
    ></input>
    {errors.map((error) => (
      <p key={error} className="help is-danger">
        {`${label} ${error}`}
      </p>
    ))}
  </div>
);

export default FormField;
