import React from "react";
import NewQuoteForm from "../../components/NewQuoteForm";
import MainNav from "../../components/MainNav";

const RatingInformationPage = () => (
  <>
    <MainNav></MainNav>
    <main>
      <section className="section">
        <div className="container card">
          <div className="card-content">
            <h1 className="title is-1">Rating Information</h1>
            <NewQuoteForm></NewQuoteForm>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default RatingInformationPage;
