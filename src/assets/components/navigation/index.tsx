import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../images/Logo.png";

import "./style.css";

function Navigation() {
  return (
    <Navbar expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="#about-me">
          <img src={Logo} alt="PON" width={60} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#tech-stack">Tech Stack</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1CxXXzDifcRewlm2p-9kfIq09RGI3Ywx2/view?usp=sharing"
              target="_blank"
            >
              Resume/CV
            </Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contacts">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
