import React, { Component } from "react";
import { Image } from "semantic-ui-react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
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
            {this.props.lang.header.showNavigation}
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            {this.props.lang.header.hideNavigation}
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                {this.props.lang.header.home}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                {this.props.lang.header.about}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <Image
                src="/images/gb_flag_icon.png"
                className="lang-icon"
                onClick={() => this.props.setLang("en")}
              />
            </li>
            <li>
              <Image
                src="/images/Spain_flag_icon.png"
                className="lang-icon"
                onClick={() => this.props.setLang("es")}
              />
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>
              I'm a {city} based <span>{occupation}</span>. {description}.
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
