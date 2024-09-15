import { Tabs, Tab, Row, Col } from "react-bootstrap";
import LabelComponent from "../label";
import ProgrammingComponent from "../prog-lang-icons";
import FrameworksComponent from "../frameworks";
import ToolsComponent from "../tools";
import { motion } from "framer-motion";

import "./style.css";

function TabComponent() {
  const rowVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: index * 0.3,
      },
    }),
  };

  return (
    <Tabs
      defaultActiveKey="tech"
      id="uncontrolled-tab-example"
      className="mb-4"
    >
      <Tab eventKey="tech" title="Tech Stack">
        <motion.div initial="hidden" whileInView="visible">
          <div className="content px-4">
            <h3>Tech Stack</h3>
            <motion.div variants={rowVariants} custom={0}>
              <Row>
                <Col lg={5}>
                  <LabelComponent>Programming Languages</LabelComponent>
                </Col>
                <Col lg={7}>
                  <ProgrammingComponent />
                </Col>
              </Row>
            </motion.div>
            <motion.div variants={rowVariants} custom={1}>
              <Row>
                <Col lg={5}>
                  <LabelComponent>Frameworks & Databases</LabelComponent>
                </Col>
                <Col lg={7}>
                  <FrameworksComponent />
                </Col>
              </Row>
            </motion.div>
            <motion.div variants={rowVariants} custom={2}>
              <Row>
                <Col lg={5}>
                  <LabelComponent>Tools & Platforms</LabelComponent>
                </Col>
                <Col lg={7}>
                  <ToolsComponent />
                </Col>
              </Row>
            </motion.div>
          </div>
        </motion.div>
      </Tab>
      <Tab eventKey="experiences" title="Experiences">
        <div className="content px-4">
          <h3>Experiences</h3>
          <p>Under Development</p>
        </div>
      </Tab>
      <Tab eventKey="services" title="Services">
        <div className="content px-4">
          <h3>Services</h3>
          <p>Under Development</p>
        </div>
      </Tab>
    </Tabs>
  );
}

export default TabComponent;
