// import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
function App() {
  const [petsArray, setPetsArray] = useState("");

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                {/* <Form />
                <List /> */}
                hi
              </>
            )}
          />
          <Route path="/Login">
            <LogIn />
          </Route>
          <Route path="/Signin">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
