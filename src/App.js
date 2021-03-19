import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import { config, languages } from "./config/config";

import "./App.css";

export default function App() {
  // Set spanish as default language
  const [language, setLanguage] = useState(languages[0]);

  useEffect(() => {
    document.title = language ? language.text.document.title : "Pablo's Resume";
  }, [language]);

  return (
    <div className="App">
      <Header
        data={language.resume.main}
        lang={language.text}
        setLanguage={setLanguage}
      />
      <About data={language.resume.main} lang={language.text} />
      <Resume data={language.resume.resume} lang={language.text} />
      <Portfolio data={language.resume.portfolio} lang={language.text} />
      <Testimonials data={language.resume.testimonials} lang={language.text} />
      {config.contactForm && (
        <Contact data={language.resume} lang={language.text} />
      )}
      <Footer data={language.resume.main} lang={language.text} />
    </div>
  );
}
