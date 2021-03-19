import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    if (this.props.lang) {
      var testimonialsLang = this.props.lang.testimonials || {};
    }

    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (
        testimonials,
        index
      ) {
        return (
          <li key={index}>
            <blockquote>
              <p>{testimonials.text}</p>
              <cite>{testimonials.user}</cite>
            </blockquote>
          </li>
        );
      });
    }

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>{testimonialsLang.title}</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
