import "./App.css";
import Main from "./components/main";
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

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/demo"} exact component={Main} />
        <Route path={"/about"} exact component={WhatWeDo} />
        <Route path={"/design"} exact component={Brand} />
        <Route path={"/"} component={() => <Redirect to="/demo" />}></Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
