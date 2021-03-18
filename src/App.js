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

  useEffect(() => {
    document.title = config.lang[langKey].document.title;
  }, [langKey]);

  return (
    <div className="App">
      <Header
        data={config.resume[langKey].main}
        lang={config.lang[langKey]}
        setLang={setLangKey}
      />
      <About data={config.resume[langKey].main} lang={config.lang[langKey]} />
      <Resume
        data={config.resume[langKey].resume}
        lang={config.lang[langKey]}
      />
      <Portfolio
        data={config.resume[langKey].portfolio}
        lang={config.lang[langKey]}
      />
      <Testimonials
        data={config.resume[langKey].testimonials}
        lang={config.lang[langKey]}
      />
      <Contact data={config.resume[langKey].main} lang={config.lang[langKey]} />
      <Footer data={config.resume[langKey].main} lang={config.lang[langKey]} />
    </div>
  );
}
