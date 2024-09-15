import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface CardComponentProps {
  src?: string;
  title?: string;
  text?: string;
  link?: string;
  disabled?: boolean;
  classname?: string;
}

function CardComponent({
  src,
  title = "",
  text = "",
  link,
  disabled = false,
  classname,
}: CardComponentProps) {
  return (
    <Card style={{ width: "100%" }}>
      {src && <Card.Img variant="top" src={src} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          variant="primary"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          disabled={disabled}
          className={classname}
        >
          View
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
