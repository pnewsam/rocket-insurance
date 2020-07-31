import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RatingInformationPage from "./pages/RatingInformationPage";
import QuoteOverviewPage from "./pages/QuoteOverviewPage";
import Store from "./state/store";

import "./App.css";

const App = () => (
  <Router>
    <Store>
      <Switch>
        <Route exact path="/" component={RatingInformationPage}></Route>
        <Route path="/quotes/:quoteId" component={QuoteOverviewPage}></Route>
      </Switch>
    </Store>
  </Router>
);

export default App;
