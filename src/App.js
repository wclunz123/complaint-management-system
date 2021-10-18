import React, { useState, useEffect } from "react";

import MainNavigation from "./Components/Navigation/MainNavigation";
import Home from "./Components/MainComponents/Home";
import About from "./Components/MainComponents/About";
import Education from "./Components/MainComponents/Education";
import TechStacks from "./Components/MainComponents/TechStacks";
import Project from "./Components/MainComponents/Project";
import Contact from "./Components/MainComponents/Contact";
import Footer from "./Components/MainComponents/Footer";

import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetch("./resumeData.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setResumeData(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  

  return (
    <div className="App">
      {resumeData && (
        <React.Fragment>
          <MainNavigation />
          <Home data={resumeData} />
          <About data={resumeData} />
          <Education data={resumeData} />
          <TechStacks data={resumeData} />
          <Project data={resumeData} />
          <Contact />
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
