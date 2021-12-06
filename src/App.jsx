import React from "react";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Event from "./components/pages/Event";
import Project from "./components/pages/Project";
import Team from "./components/pages/Team";
import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/pages/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="options">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
