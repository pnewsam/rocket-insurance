import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import Api from "../../services/Api";
import { Context, setQuote } from "../../state";
import FormField from "../FormField";

const formatBody = ({ city, line_1, line_2, postal, region, ...fields }) => ({
  address: { city, line_1, line_2, postal, region },
  ...fields,
});

const NewQuoteForm = () => {
  const [formData, setFormData] = useState({});
  const [quoteId, setQuoteId] = useState(null);
  const [, dispatch] = useContext(Context);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = formatBody(formData);
    const { quote } = await Api.createQuote(body);
    const action = setQuote(quote);
    dispatch(action);
    setQuoteId(quote.quoteId);
  };

  return quoteId ? (
    <Redirect to={`quotes/${quoteId}`}></Redirect>
  ) : (
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
