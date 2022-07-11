import React from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import ProjectList from "./components/projectList/projectList";
import Skill from "./components/skill/skill";
import './index.css';

function App() {
  return (
    <div>
      <Intro />
      <About />
      <Skill />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
