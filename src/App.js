import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Posts from "./components/posts/Posts";

function App() {
  return (
      <Router>
    <div>
        <div><Link to={'/'}>Home</Link></div>
        <div><Link to={'/posts'}>Posts</Link></div>
        <Switch>
            <Route path={'/posts'} component={Posts}/>
        </Switch>
    </div>
      </Router>
  );
}

export default App;
