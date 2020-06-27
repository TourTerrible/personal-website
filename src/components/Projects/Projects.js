import React from "react";
import "./Projects.css";
import ExperienceCard from "../../subComponents/experienceCard/ExperienceCard";
import { Hero, Slides } from "../../subComponents";
import { Container, Row, Col } from "react-bootstrap";
import { workExperiences } from "./project_data";
import Button from "../../subComponents/button/Button";
import { Fade } from "react-reveal";

const Projects = () => {
  function openRepoinNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
  }
  return (
    <Container
      id="projects"
      className="projects pt-2"
      style={{ minHeight: "500px" }}
    >
      <Hero title="Selected Projects" />
      <Row className="d-flex justify-content-center">
        <Col className="col-md-6 f18 text-center text-bold">
           I have worked on various projects under Robotics Club, IIT Guwahati, and 4i Labs, IIT Guwahati.
        </Col>

      </Row>
      <Row>
        <Col>
        <div id="experience">
                  <Fade bottom duration={1000} distance="20px">
                  <div className="experience-container" id="workExperience">
                      <div>
                          <div className="experience-cards-div">
                          {workExperiences.experience.map((card) => {
                              return (
                                  <ExperienceCard
                                      cardInfo={{
                                          git_repo_url:card.git_repo_url,
                                          link:card.link,
                                          desc: card.desc,
                                          date_and_type: card.date_and_type,
                                          companylogo: card.companylogo,
                                          title: card.title,
                                          descBullets: card.descBullets
                                      }}
                                  />
                              );
                          })}
                          </div>
                          <div className="project-button ml-4">
                          <Button text="More Projects" className="project-button ml-4" href="https://github.com/ahad18abd" newTab={true} />
                          </div>
                      </div>
                  </div>
                  </Fade>
              </div>
        </Col>
      </Row>
    </Container>

  );
};

export default Projects;
