import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import ProjectSection from "./projectsection";
import AboutSection from "./aboutsection";
import ContactSection from "./contactsection";
import Footer from "./footer";
import SkillSection from "./skillsection";

const Layout = ({ children, projects, aboutPics }) => (
  <div>
    <Helmet />
    <Header />
    <ProjectSection projects={projects} />
    <SkillSection />
    <AboutSection aboutPics={aboutPics} />
    <ContactSection aboutPics={aboutPics} />
    <Footer />
  </div>
);

export default Layout;
