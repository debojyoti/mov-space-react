import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ToastsContainer,
  ToastsContainerPosition,
  ToastsStore,
} from "react-toasts";
import FullPageLoader from "./containers/full-page-loader";
import HomePage from "./pages/home-page/home-page";

function App() {
  return (
    <Router>
      <div>
        <ToastsContainer
          store={ToastsStore}
          position={ToastsContainerPosition.BOTTOM_RIGHT}
        />
        <Switch>
          <Route exact path="*" component={HomePage} redirectRoute="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
