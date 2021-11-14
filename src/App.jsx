import { NavBar } from "./Components/NavBar";
import { Dashboard } from "./Components/Dashboard/Dashboard";
// import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      {/* <Switch>
        <Route path="/"> */}
      <Dashboard />
      {/* </Route>
      </Switch> */}
    </>
  );
}

export default App;
