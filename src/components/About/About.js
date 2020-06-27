import React,{Component} from "react";
import "./About.css";
import { Hero } from "../../subComponents";
import Button from "../../subComponents/button/Button";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  const skills = [
    "HTML, CSS, Javascipt, PHP, MySQL, React*",
    "Python, C, C++, Java*, Verilog",
    "Arduino, Raspberry Pi, FPGA",
    "ROS, OpenCV",
    "Android Programming, Firebase"
  ];

  const listSkills = skills.map(element => <li> {element} </li>);

  return (
    <Container id="about" className="about pt-2" style={{ minHeight: "400px" }}>
      <Hero title="About me" />
      <Row className="d-flex align-items-center flex-column-reverse flex-md-row">
        <Col className=" col-lg-8 col-md-7 text-justify text-bold">
          I am a sophomore at IIT Guwahati with a major in Electronics and Electrical Engineering.
          I am an enthusiastic programmer and love problem-solving and competitive coding.
          I have experience with Android App development.I have developed and published few apps on play store.
          <div className="project-button">
          <Button text="Resume" className="project-button" href="https://drive.google.com/file/d/1_811llRQQ-fC-lSo-GkJkO60OZ4QxHrl/view?usp=sharing" newTab={true} />
          </div>
        </Col>
        <div className="profil mb-5 mt-4 ml-md-5 shadow"></div>
      </Row>
    </Container>
  );
};

export default About;
