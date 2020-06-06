import React from "react";

import "./style.scss";

import Header from "./header";
import Navbar from "./navbar";
import ProjectSection from "./projectsection";
import AboutSection from "./aboutsection";
import ContactSection from "./contactsection";
import Footer from "./footer";
import SkillSection from "./skillsection";
import SEO from "../components/seo";

const Layout = ({ children, projects, aboutPics, errorPic }) => (
  <React.Fragment>
    {children ? (
      <div>
        <SEO />
        <main>{children}</main>
      </div>
    ) : (
      <div>
        <SEO />
        <Navbar />
        <Header />
        {/* <HeaderGen /> */}
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
