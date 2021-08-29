import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./utils/routersDefinitions";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import UserProvider from "./providers/UserProvider";
import AuthenticatedRoute from "./routes/AuthenticatedRoute";

const Routes: React.FC = () => (
  <Router>
    <UserProvider>
      <Switch>
        <Route path={routes.login} component={Login} />
        <AuthenticatedRoute path={routes.home} component={Home} />
        <AuthenticatedRoute path={routes.register} component={Register} />
      </Switch>
    </UserProvider>
  </Router>
);

export default Routes;
