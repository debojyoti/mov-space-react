import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/search-page/search-page";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="*" component={SearchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
