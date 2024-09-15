import GithubIcon from "../../icons/techstack/github-stack";
import FigmaIcon from "../../icons/techstack/figma";
import GitIcon from "../../icons/techstack/git";
import JiraIcon from "../../icons/techstack/jira";

import { Row, Col } from "react-bootstrap";

import "./style.css";

function ToolsComponent() {
  return (
    <div className="prog-component text-center my-auto">
      <Row>
        <Col>
          <GitIcon color=""></GitIcon>
          <p>Git</p>
        </Col>
        <Col>
          <GithubIcon color="#25292e"></GithubIcon>
          <p>Github</p>
        </Col>
        <Col>
          <JiraIcon color=""></JiraIcon>
          <p>Jira</p>
        </Col>
        <Col>
          <FigmaIcon color="#eb4c1c"></FigmaIcon>
          <p>Figma</p>
        </Col>
      </Row>
    </div>
  );
}

export default ToolsComponent;
