import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import config from "./config/config";

import "./App.css";

export default function App() {
  const [langKey, setLangKey] = useState("en");
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    setResumeData(config.resume[langKey]);
  }, [setResumeData, config.resume, langKey]);

  return (
    <div className="App">
      <Header
        data={resumeData.main}
        lang={config.lang[langKey]}
        setLang={setLangKey}
      />
      <About data={resumeData.main} lang={config.lang[langKey]} />
      <Resume data={resumeData.resume} lang={config.lang[langKey]} />
      <Portfolio data={resumeData.portfolio} lang={config.lang[langKey]} />
      <Testimonials
        data={resumeData.testimonials}
        lang={config.lang[langKey]}
      />
      <Contact data={resumeData.main} lang={config.lang[langKey]} />
      <Footer data={resumeData.main} lang={config.lang[langKey]} />
    </div>
  );
}
