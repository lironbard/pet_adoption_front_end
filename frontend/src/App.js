import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import MyPets from "./components/myPets/MyPets";
import Search from "./components/search/Search";
import ProfileSettings from "./components/profileSettings/ProfileSettings";
import AuthProvider, { useAuth } from "./context/auth";
import PetDescription from "./components/petDescription/PetDescription";
import AddPet from "./components/adminPages/AddPet";
import Dashboard from "./components/adminPages/Dashboard";
import AllPetsDisplay from "./components/adminPages/AllPetsDisplay";
import AllUsersDisplay from "./components/adminPages/AllUsersDisplay";
import DisplayUser from "./components/adminPages/DisplayUser";

const AppRouter = () => {
  let auth = useAuth();
  if (!auth.isInitiallyLoaded) {
    return <div></div>;
  }
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/settings/:userId" render={(routeProps) => <ProfileSettings {...routeProps} />} />
        <Route exact path="/pet/:petId" render={(routeProps) => <PetDescription {...routeProps} />} />
        <Route exact path="/dashboard" render={(routeProps) => <Dashboard {...routeProps} />} />
        <Route exact path="/dashboard/allpets" render={(routeProps) => <AllPetsDisplay {...routeProps} />} />
        <Route exact path="/dashboard/allusers" render={(routeProps) => <AllUsersDisplay {...routeProps} />} />
        <Route exact path="/dashboard/user/:userId" render={(routeProps) => <DisplayUser {...routeProps} />} />
        <Route exact path="/pet" render={(routeProps) => <AddPet {...routeProps} />} />
        <Route exact path="/pet/user/:userId" render={(routeProps) => <MyPets {...routeProps} />} />
        <Route exact path="/search" render={(routeProps) => <Search {...routeProps} />} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
