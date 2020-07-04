import React from "react";
import { Switch } from "react-router-dom";
import Footer from "../../layout/footer";
import { homeRoutes } from "../../routes";
import BuildRoute from "../../routes/BuildRoute";
function Home(): JSX.Element {
  return (
    <>
      <Switch>
        <BuildRoute routes={homeRoutes} />
      </Switch>
      <Footer />
    </>
  );
}
export default Home;
