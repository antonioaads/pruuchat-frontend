import { Route, Switch } from "react-router-dom";
import routes from "./utils/routersDefinitions";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import UserProvider from "./provider/UserProvider";

const Routes: React.FC = () => (
  <UserProvider>
    <Switch>
      <Route path={routes.home} exact component={Home} />
      <Route path={routes.login} exact component={Login} />
      <Route path={routes.register} exact component={Register} />
    </Switch>
  </UserProvider>
);

export default Routes;
