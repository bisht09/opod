import "./App.css";
import Main from "./components/main";
import { useEffect } from "react";
import {
  Route,
  Switch,
  useHistory,
  withRouter,
  Redirect,
} from "react-router-dom";
import WhatWeDo from "./components/whatWeDo/whatWeDo";
import Brand from "./components/brand/brand";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Careers from "./components/careers/careers";
import Privacy from "./components/privacy/privacy";
import ReactGA from "react-ga";
function App() {
  useEffect(() => {
    ReactGA.initialize("UA-208695083-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/demo"} exact component={Main} />
        <Route path={"/about"} exact component={WhatWeDo} />
        <Route path={"/design"} exact component={Brand} />
        <Route path={"/careers"} exact component={Careers} />
        <Route path={"/privacy-policy"} exact component={Privacy} />
        <Route path={"/"} component={() => <Redirect to="/demo" />}></Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
