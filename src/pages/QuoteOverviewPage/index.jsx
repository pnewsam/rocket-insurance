import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../state";
import EditQuoteForm from "../../components/EditQuoteForm";
import { formatCurrency } from "../../utils";

const QuoteOverviewPage = ({ match }) => {
  const [state] = useContext(Context);

  const { quoteId } = match.params;
  const quote = state.quotesById[quoteId];

  const premiumVal =
    quote && quote.premium ? formatCurrency(quote.premium) : "";

  return quote ? (
    <main>
      <header className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Quote Overview</h1>
          </div>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <h2 className="title is-2">Premium: {premiumVal}</h2>
          <EditQuoteForm quote={quote}></EditQuoteForm>
        </div>
      </section>
    </main>
  ) : (
    <Redirect to="/"></Redirect>
  );
};

export default QuoteOverviewPage;
