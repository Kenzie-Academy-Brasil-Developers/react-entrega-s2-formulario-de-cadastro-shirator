import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/userLogin";
import Homepage from "./pages/Homepage";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("@TOKEN") != null &&
      localStorage.getItem("@USERID") != null
    ) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <UserLogin setLoggedIn={setLoggedIn} />
        </Route>
        <Route exact path="/register">
          <UserRegister />
        </Route>
        <Route exact path="/homepage">
          {loggedIn ? <Homepage /> : <UserLogin setLoggedIn={setLoggedIn} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
