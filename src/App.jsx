import { NavBar } from "./Components/NavBar";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { MarketingList } from "./Components/MarketingList";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { Recipes } from "./pages/Recipes";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  padding: 0 20px;
`;
function App() {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Switch>
          <Route path="/" exact>
            <Dashboard />
            <MarketingList />
          </Route>
          <Route path="/recipes" exact>
            <Recipes />
          </Route>
        </Switch>
      </Wrapper>
    </>
  );
}

export default App;
