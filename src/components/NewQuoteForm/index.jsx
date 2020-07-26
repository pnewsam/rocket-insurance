import React, { useState } from "react";
import Api from "../../utils/Api";
import FormField from "../FormField";

const formatBody = ({ line_1, line_2, region, postal, ...fields }) => ({
  address: { line_1, line_2, region, postal },
  ...fields,
});

const NewQuoteForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = formatBody(formData);
    const newQuote = await Api.createQuote(body);
    console.log(newQuote);
  };

  return (
    <form onSubmit={handleSubmit} name="quote">
      <FormField name="first_name" label="First Name" onChange={handleChange} />
      <FormField name="last_name" label="Last Name" onChange={handleChange} />
      <fieldset>
        <legend>Address</legend>
        <FormField name="line_1" label="Line 1" onChange={handleChange} />
        <FormField name="line_2" label="Line 2" onChange={handleChange} />
        <FormField name="city" label="City" onChange={handleChange} />
        <FormField name="region" label="Region" onChange={handleChange} />
        <FormField name="postal" label="Postal" onChange={handleChange} />
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewQuoteForm;
