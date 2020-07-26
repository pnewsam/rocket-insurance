import React from "react";

const FormField = ({ name, label, onChange }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input type="text" name={name} onChange={onChange}></input>
  </>
);

export default FormField;
