import React,{ useState, useEffect } from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { Lotties } from "../../subComponents";
import Splash from "../../assets/anim/splash.json";
import ReactTypingEffect from 'react-typing-effect';
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
//import "../../../node_modules/react-typist/dist/Typist.css"

import { useSpring, animated } from "react-spring";

const Home = () => {
  const slideDown = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -50 },
  });
  const [count, setCount] = useState(1);
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    setCount(1);
    }, [count]);
  return (
    <Container
      fluid={true}
      className="d-flex align-items-end justify-content-center "
      style={{ minHeight: "40vh" }}
    >

      <Row className="home-container d-flex flex-column flex-lg-row w-100">
        <Col className="home-animation col-4 d-flex justify-content-center align-items-center splash-container">
          <Lotties
            animationData={Splash}
            lh="20rem"
            lw="50rem"
            mh="18rem"
            mw="50rem"
          />
        </Col>
        <Col className="col-12 w-100 col-lg-8 pb-sm-5">
          <animated.div style={slideDown}>
            <p style={slideDown} className="hi text-bold">
              Hi,
              I am
            </p>
            <h1 style={slideDown} delay="500" className="name">
              Abdul Ahad
            </h1>
              <p className="subtitle">
              {count ?(
                <Typist onTypingDone={() => setCount(0)} startDelay={200}>
                      <span> I like to code </span>
                      <Typist.Backspace count={5} delay={500} />
                      <span> develop Android Apps </span>
                      <Typist.Backspace count={13} delay={500} />
                      <span>Web Apps </span>
                      <Typist.Backspace count={25} delay={500} />
                </Typist>
              ) :("")}
                </p>
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
