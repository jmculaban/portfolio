import React from 'react';
import Row from 'react-bootstrap/Row';

const Intro = () => {
  const helloOver = (e) => {
    e.target.innerHTML = '<a href="/About">About</a>';
  }
  const helloLeave = (e) => {
    e.target.innerHTML = 'Hello.'
  }
  const iOver = (e) => {
    e.target.innerHTML = '<a href="/Work">Work</a>';
  }
  const iLeave = (e) => {
    e.target.innerHTML = 'I am';
  }
  const nameOver = (e) => {
    e.target.innerHTML = '<a href="/Contact">Contact</a>';
  }
  const nameLeave = (e) => {
    e.target.innerHTML = 'Michael';
  }

  return (
    <div className="max-width">
      <div className="vertical-center">
        <h1>
          <Row id="hello-text" onMouseOver={helloOver} onMouseLeave={helloLeave} className="intro-block intro-weight">
            Hello.
          </Row>
          <Row id="i-text" onMouseOver={iOver} onMouseLeave={iLeave} className="intro-block intro-color">
            I am
          </Row>
          <Row id="name-text" onMouseOver={nameOver} onMouseLeave={nameLeave} className="intro-block intro-color intro-weight">
            Michael
          </Row>
        </h1>
      </div>
    </div>
  );
};

export default Intro;