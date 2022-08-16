import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/userLogin";
import Homepage from "./pages/Homepage";
import CreateNew from "./components/Modal/CreateNew";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <UserLogin />
        </Route>
        <Route exact path="/register">
          <UserRegister />
        </Route>
        <Route exact path="/homepage">
          <Homepage />
        </Route>
        <Route exact path="/modal">
          <CreateNew />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
