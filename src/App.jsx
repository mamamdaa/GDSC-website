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
      <Navbar />
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/event" component={Event} />
        <Route path="/project" component={Project} />
        <Route path="/team" component={Team} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
