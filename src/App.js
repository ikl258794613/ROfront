import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import Calculator from "./views/Calculator";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/calculator" component={Calculator}></Route>
      </>
    </Router>
  );
}

export default App;
