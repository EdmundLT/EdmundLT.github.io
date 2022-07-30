import About from "./About";
import Education from "./Education";
import Experiences from "./Experiences/Experiences";
import Header from "./Header";
import Nav from "./Nav";
import Projects from "./Project/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import { mainBody, navBar, about, education, contact } from "../data/config";
import React from "react";

function Home() {
  return (
    <div>
      {navBar.show && <Nav />}
      <Header
        key={mainBody.name}
        name={mainBody.name}
        message={mainBody.message}
        id="top"
      />

      <About
        key="resume"
        me={about.me}
        description={about.description}
        resume={about.resume}
      />

      <Education
        key="edu"
        logo={education.logo}
        school={education.school}
        location={education.location}
        program={education.program}
        start={education.startDate}
        grad={education.gradDate}
        id="education"
      />

      <Experiences key="exp" />
      <Projects />
      <Skills />
      <Contact 
        message={contact.message}
        email={contact.email}
        sendemail={contact.sendemail}
      />
      <Footer />
    </div>
  );
}

export default Home;
