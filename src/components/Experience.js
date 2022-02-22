import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import USTIcon from '../experienceIcon/UST.png'
import oriiIcon from '../experienceIcon/orii.png'
import meiyume from '../experienceIcon/meiyume.png'
import handyRehab from '../experienceIcon/handyRehab.png'
import sportopia from '../experienceIcon/sportopia.png'
import { ReactComponent as SchoolIcon } from './school.svg';
import { ReactComponent as MeiyumeIcon } from './meiyumeLipstick.svg';
import { ReactComponent as OrigamiIcon } from './engineer.svg';
import { ReactComponent as HandyRehabIcon } from './handyRehabIcon.svg';
import { ReactComponent as SportopiaIcon } from './sportopiaIcon.svg';
import './experience.styles.css';
import './hover.css';
class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const descriptions = work.descriptions;
        console.log(descriptions)
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2 hvr-buzz-out" key={i}>
              {technology}
            </Badge>
          );
        });
        var desc = descriptions.map((description, i) => {
          console.log(description)
          return (
            <li key={i}>{description}</li>
          );
        });
        var iconImage
        var icons
        switch (i) {
          case 0:
            iconImage = meiyume;
            icons = <MeiyumeIcon />;
            break
          case 1:
            iconImage = handyRehab;
            icons = <HandyRehabIcon />;
            break
          case 2:
            iconImage = sportopia;
            icons = <SportopiaIcon />;
            break
          case 4:
            iconImage = USTIcon;
            icons = <SchoolIcon />;
            break
          case 3:
            iconImage = oriiIcon;
            icons = <OrigamiIcon />;
            break
          default:
        }

        return (

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={icons}
            key={i}
          >
            <a target="_blank" href={work.url}>
              <div style={{ textAlign: "center", marginBottom: "10px" }}>
                <img href src={iconImage} className="img-resize hvr-wobble-vertical" alt="myLogo" />
              </div>
            </a>
            <h3
              className="title"
              style={{ textAlign: "center" }}
            >
              {work.company}
            </h3>
            <h4
              className="subTitle"
              style={{ textAlign: "center" }}
            >
              {work.title}
            </h4>
            <ul style={{ marginTop: "15px" }}>
              {desc}
            </ul>
            <div style={{ textAlign: "center", marginTop: "15px" }}>{tech}</div>

          </VerticalTimelineElement>

        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black hvr-buzz-out" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
