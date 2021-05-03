import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./views/routes";
import Nav from "./components/Nav";

const routeComponents = routes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

const App = () => {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Nav routes={routes} />
        <Switch>{routeComponents}</Switch>
      </Router>
    </React.Suspense>
  );
};
export default App;
