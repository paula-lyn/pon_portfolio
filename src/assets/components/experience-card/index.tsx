import Card from "react-bootstrap/Card";
import { Experience } from "../../../data/experiences";

import "./style.css";

function ExperienceCard({
  position = "",
  company = "",
  date = "",
  text = "",
}: Experience) {
  return (
    <Card className="exp-card mt-4">
      <Card.Header className="d-flex justify-content-between">
        <span>{position}</span>
        <span className="text-muted">{date}</span>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-4 text-muted">{company}</Card.Subtitle>
        <Card.Text className="blockquote-footer exp-desc">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
