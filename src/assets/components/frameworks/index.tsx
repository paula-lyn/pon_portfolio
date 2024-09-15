import BootstrapIcon from "../../icons/techstack/bootstrap";
import ReactIcon from "../../icons/techstack/react";
import MySQLIcon from "../../icons/techstack/mysql-icon";

import { Row, Col } from "react-bootstrap";

import "./style.css";

function FrameworksComponent() {
  return (
    <div className="prog-component text-center">
      <Row>
        <Col>
          <BootstrapIcon color="#7634fa"></BootstrapIcon>
          <p>Bootstrap</p>
        </Col>
        <Col>
          <ReactIcon color="#55d0f2"></ReactIcon>
          <p>React JS</p>
        </Col>
        <Col>
          <MySQLIcon color="#005b85"></MySQLIcon>
          <p>MySql</p>
        </Col>
      </Row>
    </div>
  );
}

export default FrameworksComponent;
