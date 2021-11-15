import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Global, css } from "@emotion/react";
import { NotFound } from "./pages/NotFound";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login.js";
import { ProtectedRouteLogin, ProtectedRouteIndex } from "./services/ProtectedRoutes";

const globalCSS = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

  :root {
    --gray-1: #333333;
    --gray-2: #4f4f4f;
    --gray-3: #bdbdbd;
    --blue-1: #2f80ed;
    --blue-2: #2d9cdb;
    --red: #eb5757;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html,
  body {
    font-family: "Roboto", sans-serif;
    height: 100vh;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalCSS} />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRouteLogin path="/login" component={Login} />
          <ProtectedRouteIndex path="/index" component={Index} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
