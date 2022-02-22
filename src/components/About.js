import React, { Component } from "react";
import './hover.css';
import './about.styles.css';
import resume from '../Resume/SIUHoiWa_CV.pdf';
class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about" className="hvr-grow-shadow">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span className="hvr-buzz-out">{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-5 mb-5 center">
              <div className="polaroid" >
                <span className="hvr-rotate" style={{ cursor: "auto" }}>
                  <img
                    height="300px"
                    style={{ maxWidth: '800px' }}
                    src={profilepic}
                    alt="Avatar placeholder"
                  />

                </span>
              </div>
            </div>

            <div className="col-md-7 center hvr-bubble-left">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                    <br />
                    <a
                      href={resume}
                      target="blank"
                      className="text-decoration-none button1 hvr-float-shadow"
                    >
                      View my resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
