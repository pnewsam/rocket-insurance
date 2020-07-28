import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../state";

const QuoteOverviewPage = ({ match }) => {
  const [state] = useContext(Context);

  const { quoteId } = match.params;
  const quote = state.quotesById[quoteId];

  return !quote ? (
    <Redirect to="/"></Redirect>
  ) : (
    <main>
      <h1>Quote Overview</h1>
      {JSON.stringify(quote)}
    </main>
  );
};

export default QuoteOverviewPage;
