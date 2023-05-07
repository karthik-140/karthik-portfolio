import { Route, Redirect } from "react-router-dom";

import HeaderNavbar from "./components/Navbar";
//import ProjectCard from "./components/Card";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <HeaderNavbar />
      <Route to="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/resume">
        <Resume/>
      </Route>
      <Route path="/*">
        <Redirect to="/home" />
      </Route>
    </>
  );
}

export default App;
