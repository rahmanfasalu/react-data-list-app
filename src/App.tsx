import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./layout/header";
import { appRoutes } from "./routes";
import BuildRoute from "./routes/BuildRoute";
function App() {
  return (
    <>
      <Router>
        <Header />
        <BuildRoute routes={appRoutes} />
      </Router>
    </>
  );
}

export default App;
