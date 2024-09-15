import { Button } from "react-bootstrap";

import "./style.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
function ButtonComponent({ children, type, ...rest }: ButtonProps) {
  return (
    <>
      <Button type={type} {...rest}>
        {children}
      </Button>
    </>
  );
}

export default ButtonComponent;
