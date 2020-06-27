import React,{Component} from "react";
import "./skills.css";
import { Hero } from "../../subComponents";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  const skills = [
    "HTML", "CSS", "Javascipt", "PHP", "MySQL", "React*",
    "Python", "C/C++", "Java*", "Verilog",
    "Arduino", "Raspberry Pi", "FPGA",
    "ROS", "OpenCV",
    "Android Studio", "Firebase","XML"
  ];

  const listSkills = skills.map(element => <li> {element} </li>);

  return (
    <Container id="skills" className="skills pt-2" style={{ minHeight: "400px" }}>
      <Hero title="Technical Skills" />
      <Row className="d-flex align-items-center flex-column-reverse flex-md-row  text-justify text-bold">
        <ul className="skills mt-3">{listSkills}</ul>
      </Row>
      <div className="text-left ml-2">* Elementary proficiency</div>
    </Container>
  );
};

export default Skills;
