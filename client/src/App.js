import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Thanks from "./components/Thanks";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/thanks" component={Thanks} />
      </Switch>
    </Router>
  );
}

export default App;
