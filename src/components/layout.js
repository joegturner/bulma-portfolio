import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Navbar from "./navbar";
import ProjectSection from "./projectsection";
import AboutSection from "./aboutsection";
import ContactSection from "./contactsection";
import Footer from "./footer";
import SkillSection from "./skillsection";

const Layout = ({ children, projects, aboutPics, errorPic }) => (
  <React.Fragment>
    {children ? (
      <div>
        <Helmet />
        <main>{children}</main>
      </div>
    ) : (
      <div>
        <Helmet />
        <Navbar />
        <Header />
        <ProjectSection projects={projects} />
        <SkillSection />
        <AboutSection aboutPics={aboutPics} />
        <ContactSection aboutPics={aboutPics} />
        <Footer />
      </div>
    )}
  </React.Fragment>
);

export default Layout;
