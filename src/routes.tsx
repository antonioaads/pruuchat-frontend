import { Redirect, Route, Switch } from "react-router-dom";
import routes from "./utils/routersDefinitions";

// Pages
import Login from './pages/Login';
import Home from "./pages/Home";

const Routes: React.FC = ()  => (
  <Switch>
    <Route path={routes.login} exact component={Login} />
    <Redirect to={routes.login} />
  </Switch>
);

export default Routes;

