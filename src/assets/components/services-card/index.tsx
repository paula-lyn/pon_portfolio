import Card from "react-bootstrap/Card";
import "./style.css";

interface CardComponentProps {
  servicename?: string;
  text?: string;
  icon?: any;
}
function ServiceCard({
  servicename = "",
  text = "",
  icon,
}: CardComponentProps) {
  return (
    <Card className="service mt-2 py-3">
      <Card.Body className="text-center">
        <div className="">{icon}</div>
        <Card.Title className="my-3">{servicename}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
