import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/about/About";
import WhyHire from "./components/whyhire/WhyHire";
import Qualities from "./components/qualities/Qualities";
import ContactAman from "./components/contactAman/ContactAman";
import { Switch, Route } from "react-router-dom";
import MadeProject from "./components/madeProject/MadeProject";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/projects">
          <MadeProject></MadeProject>
        </Route>
        <Route path="/">
          <>
            <About></About> <WhyHire></WhyHire>
            <Qualities></Qualities>
            <ContactAman></ContactAman>
          </>
        </Route>
      </Switch>
    </div>
    // <div className="App">
    //   <About></About>
    // </div>
  );
}

export default App;
