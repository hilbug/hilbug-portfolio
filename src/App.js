import React from "react";
import Header from "./components/Header";
import Introduction from "./pages/Introduction";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <>
      <Header />
      <Switch>
          <Route exact path="/">
            <Introduction />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      {/* SVG Image for angle */}
      <svg className="mb-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#bc8f8f" fillOpacity="1" d="M0,224L1440,160L1440,320L0,320Z"></path>
            </svg>
      <Footer />
    </>
    </Router>
  );
}

export default App;
