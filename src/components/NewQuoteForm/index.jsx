/** @jsx jsx */
import { useContext, useState } from "react";
import { jsx } from "@emotion/core";
import { Redirect } from "react-router-dom";
import Api from "../../services/Api";
import { Context, setQuote } from "../../state";
import FormField from "../FormField";
import styles from "./styles";

const formatBody = ({ city, line_1, line_2, postal, region, ...fields }) => ({
  address: { city, line_1, line_2, postal, region },
  ...fields,
});

const initialFormState = {
  city: "",
  first_name: "",
  last_name: "",
  line_1: "",
  line_2: "",
  postal: "",
  region: "",
};

const NewQuoteForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errorsByField, setErrorsByField] = useState({});
  const [quoteId, setQuoteId] = useState(null);
  const [, dispatch] = useContext(Context);

  const isPresent = (val) => (Boolean(val.length) ? "" : "must be present.");
  const matchesPostal = (val) =>
    /^\d{5}$/g.test(val) ? "" : "must be a valid postal code.";

  const validationsByField = {
    city: [isPresent],
    line_1: [isPresent],
    line_2: [],
    postal: [isPresent, matchesPostal],
    region: [isPresent],
    first_name: [isPresent],
    last_name: [isPresent],
  };

  const validateForm = (formData) => {
    let errorsByField = {};
    Object.entries(formData).forEach(([name, value]) => {
      validationsByField[name].forEach((validate) => {
        const error = validate(value);
        if (error) {
          errorsByField[name]
            ? errorsByField[name].push(error)
            : (errorsByField[name] = [error]);
        }
      });
    });
    return errorsByField;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorsByField = validateForm(formData);
    if (Object.keys(errorsByField).length) {
      setErrorsByField(errorsByField);
    } else {
      const body = formatBody(formData);
      const { quote } = await Api.createQuote(body);
      const action = setQuote(quote);
      dispatch(action);
      setQuoteId(quote.quoteId);
    }
  };

  return quoteId ? (
    <Redirect to={`quotes/${quoteId}`}></Redirect>
  ) : (
    <form css={styles.form} onSubmit={handleSubmit} name="quote">
      <FormField
        name="first_name"
        label="First Name"
        onChange={handleChange}
        errors={errorsByField["first_name"]}
      />
      <FormField
        name="last_name"
        label="Last Name"
        onChange={handleChange}
        errors={errorsByField["last_name"]}
      />
      <fieldset>
        <legend className="label is-medium">Address</legend>
        <FormField
          name="line_1"
          label="Line 1"
          onChange={handleChange}
          errors={errorsByField["line_1"]}
        />
        <FormField
          name="line_2"
          label="Line 2"
          onChange={handleChange}
          errors={errorsByField["line_2"]}
        />
        <FormField
          name="city"
          label="City"
          onChange={handleChange}
          errors={errorsByField["city"]}
        />
        <FormField
          name="region"
          label="Region"
          onChange={handleChange}
          errors={errorsByField["region"]}
        />
        <FormField
          name="postal"
          label="Postal"
          onChange={handleChange}
          errors={errorsByField["postal"]}
        />
      </fieldset>
      <div className="field">
        <div className="control">
          <input
            className="button is-success"
            css={styles.input}
            type="submit"
            value="Submit"
          />
        </div>
      </div>
    </form>
  );
};

export default NewQuoteForm;
