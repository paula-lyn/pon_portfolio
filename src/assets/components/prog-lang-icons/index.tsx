import HtmlIcon from "../../icons/techstack/html";
import CssIcon from "../../icons/techstack/css";
import PhpIcon from "../../icons/techstack/php";
import JavascriptIcon from "../../icons/techstack/javascript";
import SassIcon from "../../icons/techstack/sass";

import { Row, Col } from "react-bootstrap";

import "./style.css";

function ProgrammingComponent() {
  return (
    <div className="prog-component text-center">
      <Row>
        <Col>
          <HtmlIcon color="#de4b26"></HtmlIcon>
          <p>HTML5</p>
        </Col>
        <Col>
          <CssIcon color="#136fb0"></CssIcon>
          <p>CSS3</p>
        </Col>
        <Col>
          <SassIcon color="#cc669c"></SassIcon>
          <p>Sass</p>
        </Col>
        <Col>
          <JavascriptIcon color="#f0d71d"></JavascriptIcon>
          <p>JavaScript</p>
        </Col>
        <Col>
          <PhpIcon color="#7277ad"></PhpIcon>
          <p>PHP</p>
        </Col>
      </Row>
    </div>
  );
}

export default ProgrammingComponent;
