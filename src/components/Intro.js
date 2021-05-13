import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

const Intro = () => {
  return (
    <Jumbotron fluid>
      <h1>
      <Row className="intro-weight">
        Hello.
      </Row>
      <Row className="intro-color">
        I am
      </Row>
      <Row className="intro-color intro-weight">
        Michael
      </Row>
    </h1>
    </Jumbotron>
  );
};

export default Intro;