import React, { Component } from "react";
import { directories } from "../config/config";

class About extends Component {
  render() {
    if (this.props.lang) {
      var about = this.props.lang.about;
    }

    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var country = this.props.data.address.country;
      var zip = this.props.data.address.zip;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumeDownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt={about.profilePicAlt}
            />
          </div>
          <div className="nine columns main-col">
            <h2>{about.title}</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>{about.contactDetails}</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {city}, {state}, {country}, {zip}
                  </span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href={`${directories.pdf}/${resumeDownload}`}
                    className="button"
                    download
                  >
                    <i className="fa fa-download"></i>
                    {about.downloadResume}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
