import React, { useContext, useState, useEffect } from "react";
import Api from "../../services/Api";
import { Context, setQuote } from "../../state";
import VariableOption from "../../components/VariableOption";

const EditQuoteForm = ({ quote }) => {
  const [, dispatch] = useContext(Context);
  const [variable_selections, setVariableSelections] = useState({});

  const { variable_options } = quote;

  useEffect(() => {
    if (!variable_options) return;
    const initialVariableSelections = Object.entries(variable_options).reduce(
      (acc, [name, data]) => {
        acc[name] = data.values[0];
        return acc;
      },
      {}
    );
    setVariableSelections(initialVariableSelections);
  }, [variable_options]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVariableSelections({ ...variable_selections, [name]: parseInt(value) });
  };

  const body = () => {
    const { policy_holder, rating_address, quoteId } = quote;
    return {
      quote: { policy_holder, rating_address, quoteId, variable_selections },
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Api.updateQuote(quote.quoteId, body());
    const action = setQuote(response.quote);
    dispatch(action);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(variable_options).map(([name, data]) => (
        <VariableOption
          key={name}
          data={data}
          handleChange={handleChange}
          name={name}
        ></VariableOption>
      ))}
      <button className="button" type="submit">
        Update Quote
      </button>
    </form>
  );
};

export default EditQuoteForm;
