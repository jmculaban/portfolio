import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

const Intro = () => {
  return (
    <div className="max-width">
      <div className="vertical-center">
        <h1>
          <Row className="intro-block intro-weight">
            Hello.
          </Row>
          <Row className="intro-block intro-color">
            I am
          </Row>
          <Row className="intro-block intro-color intro-weight">
            Michael
          </Row>
        </h1>
      </div>
    </div>
  );
};

export default Intro;