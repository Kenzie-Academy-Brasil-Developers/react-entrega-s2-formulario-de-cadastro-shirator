import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/userLogin";
import Homepage from "./pages/Homepage";
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
      </Switch>
    </div>
  );
}

export default App;
