import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./Navbar";
import SkillsCard from "./Skills"; 
import Contact from "./Contact";
import Project from "./Projects";
import About from "./About";

export default function Mainnav() {
  return (
    <>
      <ResponsiveAppBar />
      <div style={{  minHeight: '90vh', color: 'white' }}> 
        <section id="about" style={{ padding: '10px 0', marginBottom: '0' }}>
          <About/> {/* About Content Here since we using hash link browser  will to that respective section */}
        </section>
        <section id="skills" style={{ padding: '50px 0', marginBottom: '0' }}>
          <SkillsCard /> 
        </section>
        <section id="projects" style={{ padding: '50px 0', marginBottom: '0' }}>
          <Project/> 
        </section>
        <section id="contact" style={{ padding: '50px 0', marginBottom: '0' }}>
          <Contact/>
        </section>
      </div>
      {/* <Outlet /> no need of outlet since using hash link  */}
    </>
  );
}
