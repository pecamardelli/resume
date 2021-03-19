import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { languages } from "../config/config";

class Header extends Component {
  render() {
    if (this.props.lang) {
      var nav = this.props.lang.header.nav;
      var banner = this.props.lang.header.banner;
    }

    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var country = this.props.data.address.country;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            {nav.showNavigation}
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            {nav.hideNavigation}
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                {nav.home}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                {nav.about}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                {nav.resume}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                {nav.works}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                {nav.testimonials}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                {nav.contact}
              </a>
            </li>
            {languages.map((lang, index) => (
              <li key={index}>
                <Image
                  src={lang.icon}
                  className="lang-icon"
                  onClick={() => this.props.setLanguage(lang)}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              {banner.IAm} {name}.
            </h1>
            <h3>
              {banner.salute} <span>{occupation}</span> {banner.based} {city},{" "}
              {banner.townPreffix} {state}, {country}. {description}.
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
