import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RatingInformationPage from "./pages/RatingInformationPage";
import QuoteOverviewPage from "./pages/QuoteOverviewPage";
import Store from "./state/store";

import "./App.css";

const App = () => (
  <Router>
    <Store>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/edit">Edit</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={RatingInformationPage}></Route>
        <Route path="/quotes/:quoteId" component={QuoteOverviewPage}></Route>
      </Switch>
    </Store>
  </Router>
);

export default App;
