import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../state";
import EditQuoteForm from "../../components/EditQuoteForm";

const QuoteOverviewPage = ({ match }) => {
  const [state] = useContext(Context);

  const { quoteId } = match.params;
  const quote = state.quotesById[quoteId];

  return quote ? (
    <main>
      <h1>Quote Overview</h1>
      <p>Premium: {quote.premium}</p>
      <EditQuoteForm quote={quote}></EditQuoteForm>
    </main>
  ) : (
    <Redirect to="/"></Redirect>
  );
};

export default QuoteOverviewPage;
