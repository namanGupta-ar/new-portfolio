import React from "react";
import AboutMe from "./AboutMe";
import Service from "./Service";
import Testimonials from "./Testimonials";
import Clients from "./Clients";

const About = () => {
  return (
    <article class="about  active" data-page="about">
      <header>
        <h2 class="h2 article-title">About me</h2>
      </header>
      <AboutMe />
      <Service />
      <Testimonials />
      <Clients />
    </article>
  );
};

export default About;
