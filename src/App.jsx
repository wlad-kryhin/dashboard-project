import { NavBar } from "./Components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { MarketingList } from "./Components/MarketingList";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";
import { Recipes } from "./pages/Recipes";
import { Challenge } from "./pages/Challenge";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 20px;
`;
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Wrapper>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/recipes" exact>
            <Recipes />
          </Route>
          <Route path="/challenge" exact>
            <Challenge />
          </Route>
          <Redirect to="/" />
        </Switch>
        <MarketingList />
      </Wrapper>
    </>
  );
}

export default App;
