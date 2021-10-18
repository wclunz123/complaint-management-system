import React from "react";

import logo from '../../Images/persol.png'
import ExperienceList from "./ExperienceList";

import "./Experience.css";

const DUMMY = [
  {
    company: "Dynamic Human Capital Pte. Ltd",
    logo: logo,
    title: "Recruitment Consultant",
    period: "Jan 2012 - Feb 2015",
    jobdesc:
      `At Instant Domain Search we help you find the perfect domain name faster than anywhere else. I was brought on as an early hire here to help take an application that had seen enormous and steady organic growth and give it the boost it deserved. 
      
      As a member of a very small but talented team, I work across the gamut of our stack. This currently consists of a React/Typescript frontend (recently migrated to Next.js), a new combination of Golang and Rust Servers, and an iOS app (soon to be React Native).`,
  },
  {
    company: "MCI Career Services Pte. Ltd",
    logo: logo,
    title: "Recruitment Consultant",
    period: "Feb 2015 - Feb 2019",
    jobdesc:
      `For most of my time at Shop Your Own Mortgage, I have worked as a Full Stack Software Engineer. Here I have had the chance to dig in and get my hands dirty with all parts of our software. I have worked with our legacy PHP backend, as well as built new node-based servers for new products. As well, I led the development of V2 of our mobile application written in React Native. 

      I have worked extensively with React/Redux as well as with react hooks. More recently, I have been given the opportunity to lead our cybersecurity initiative. As part of our partnership with a number of 3rd parties and our planned expansion into Europe, the need to tighten security and bring our technology up to certain compliance standards has become evident. It is my job to bring us into alignment with these, as well as hardening our security stance as a whole.`,
  },
  {
    company: "PersolKelly Singapore",
    logo: logo,
    title: "Recruitment Consultant",
    period: "Mar 2019 - Present",
    jobdesc:
      `Working for the City of Fort St. John has given me a solid understanding of a city's infrastructure system and what it takes to keep the things working that we take for granted every day. During my time here I have worked in all roles involved in the Water and Sewer Department, with the exception of equipment operating. I worked as a water meter technician programming the meters in people's homes. I worked in location, excavation, installation and repair of water and sewer lines. I learned how to install, dismantle, troubleshoot, and repair the most popular models of fire hydrants. 
      
      While working for the Water Treatment and Distribution Department, and alongside one partner, we led the first Uni-Directional Flow program our city has done in years. This requires a thorough understanding of the city's water grid to selectively force excessive pressure through a water line in order to clean it. This must be done in a specific order for every line in the city.`,
  },
];

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-content">
        <h2>Experiences</h2>
        <div className="experience-grid-container">
          {DUMMY.map((item) => {
            return (
              <ExperienceList
                key={item.company}
                logo={item.logo}
                company={item.company}
                title={item.title}
                period={item.period}
                jobdesc={item.jobdesc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
