import Users from "./components/users/Users";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function App() {
  return (
      <Router>
    <div>
        <div><Link to={'/'}>Home</Link></div>
        <div><Link to={'/users'}>Users</Link></div>
        <Switch>
            <Route path={'/users'} component={Users}/>
        </Switch>
    </div>
      </Router>
  );
}

export default App;
