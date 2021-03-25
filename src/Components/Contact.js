import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.lang) {
      var contact = this.props.lang.contact;
    }

    if (this.props.data) {
      var name = this.props.data.main.name;
      var city = this.props.data.main.address.city;
      var state = this.props.data.main.address.state;
      var zip = this.props.data.main.address.zip;
      //var email = this.props.data.main.email;
      var message = this.props.data.main.contactmessage;
      var activities = this.props.data.activities;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>{contact.getInTouch}</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    {contact.form.name} <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    {contact.form.email} <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">{contact.form.subject}</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    {contact.form.message} <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                  ></textarea>
                </div>

                <div>
                  <button className="submit">{contact.form.submit}</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning">{contact.form.submitError}</div>
            <div id="message-success">
              <i className="fa fa-check"></i>
              {contact.form.submitSuccess}
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>{contact.widget.title}</h4>
              <p className="address">
                {name}
                <br />
                {city}, {state} {zip}
                <br />
              </p>
            </div>

            <div className="widget widget_tweets">
              <h4 className="widget-title">{contact.widget.activity.title}</h4>
              <ul id="twitter">
                {activities.map((entry, index) => (
                  <li key={index}>
                    <span>
                      {entry.description}{" "}
                      {entry.link ? (
                        <a href={entry.link} target="_blank">
                          {entry.linkText}
                        </a>
                      ) : (
                        ""
                      )}
                    </span>
                    <b>
                      <a href={null}>{entry.date}</a>
                    </b>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
