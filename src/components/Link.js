import React from 'react';
import Row from 'react-bootstrap/Row';

const Links = () => {
  return (
    <div id="" className="max-width link-tap">
      <div className="vertical-center">
        <h1>
          <Row className="intro-block intro-weight animate">
            <a href="/About">About</a>
          </Row>
          <Row className="intro-block intro-color animate delay04">
            <a href="/Work">Work</a>
          </Row>
          <Row className="intro-block intro-color intro-weight animate delay08">
            <a href="/Contact">Contact</a>
          </Row>
        </h1>
      </div>
    </div>
  );
};

export default Links;