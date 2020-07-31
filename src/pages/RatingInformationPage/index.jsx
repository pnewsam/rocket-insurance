import React from "react";
import NewQuoteForm from "../../components/NewQuoteForm";

const RatingInformationPage = () => (
  <main>
    <header className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">Rocket Insurance</h1>
        </div>
      </div>
    </header>
    <section className="section">
      <div className="container">
        <h2 className="title is-2">Rating Information</h2>
        <NewQuoteForm></NewQuoteForm>
      </div>
    </section>
  </main>
);

export default RatingInformationPage;
