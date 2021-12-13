// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import HomeScreen from "./screens-pages/HomeScreen";
import LogIn from "./components/LogInModal";
import SignUp from "./components/SignUpModal";
function App() {
  const [petsArray, setPetsArray] = useState("");

  return (
    <>
      {/* <NavBar /> */}
      <SideBar />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
    // <Router>
    //   <div className="App">
    //     <NavBar />
    //     <Switch>
    //       <Route
    //         exact
    //         path="/"
    //         render={() => (
    //           <main>
    //             <Container>
    //               {/* <Form />
    //             <List /> */}
    //               <h1>Hi</h1>
    //               <Footer />
    //             </Container>
    //           </main>
    //         )}
    //       />
    //       <Route path="/Login">
    //         <LogIn />
    //       </Route>
    //       <Route path="/Signin">
    //         <SignUp />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
