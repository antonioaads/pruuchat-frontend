import { Redirect, Route, Switch } from "react-router-dom";
import routes from "./utils/routersDefinitions";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Teste from "./pages/Teste";

const Routes: React.FC = () => (
  <Switch>
    <Redirect exact from={"/"} to={routes.login} />
    <Route path={routes.home} exact component={Home} />
    <Route path={routes.login} exact component={Login} />
    <Route path={routes.register} exact component={Register} />
    <Route path={'/teste'} exact component={Teste} />
  </Switch>
);

export default Routes;
