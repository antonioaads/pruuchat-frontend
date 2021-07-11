import { Redirect, Route, Switch } from "react-router-dom";
import routes from "./utils/routersDefinitions";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

const Routes: React.FC = () => (
  <Switch>
    <Route path={routes.home} exact component={Home} />
    <Route path={routes.login} exact component={Login} />
    <Route path={routes.register} exact component={Register} />
    <Redirect to={routes.login} />
  </Switch>
);

export default Routes;
