/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from "@emotion/core";
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../state";
import EditQuoteForm from "../../components/EditQuoteForm";
import MainNav from "../../components/MainNav";
import { formatCurrency } from "../../utils";
import styles from "./styles";

const QuoteOverviewPage = ({ match }) => {
  const [state] = useContext(Context);

  const { quoteId } = match.params;
  const quote = state.quotesById[quoteId];

  const premiumVal =
    quote && quote.premium ? formatCurrency(quote.premium) : "";

  return quote ? (
    <>
      <MainNav></MainNav>
      <main css={styles.main}>
        <section className="section">
          <div className="container card">
            <div className="card-content">
              <h1 className="title is-1">Quote Overview</h1>
              <h2 className="title is-3">Your Premium: {premiumVal}</h2>
              <EditQuoteForm quote={quote}></EditQuoteForm>
            </div>
          </div>
        </section>
      </main>
    </>
  ) : (
    <Redirect to="/"></Redirect>
  );
};

export default QuoteOverviewPage;
