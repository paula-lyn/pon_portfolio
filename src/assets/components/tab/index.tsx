import { Tabs, Tab, Row, Col } from "react-bootstrap";
import LabelComponent from "../label";
import ProgrammingComponent from "../prog-lang-icons";
import FrameworksComponent from "../frameworks";
import ToolsComponent from "../tools";
import ExperienceCard from "../experience-card";
import ServiceCard from "../services-card";

import WebIcon from "../../icons/web";
import TestIcon from "../../icons/test";

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
          <motion.div initial="hidden" whileInView="visible">
            <h3>Experiences</h3>

            <motion.div variants={rowVariants} custom={0}>
              <ExperienceCard
                position="Front-End Web Developer Intern / Software Tester Intern"
                company="Highly Succeed Inc. (Mandaluyong City, Philippines)"
                date="March 2024 - June 2024"
                text="Developed front-end of web application using HTML, Sass, Bootstrap, and React.js, ensuring it is API-ready. 
            Conducted manual, regression, and user acceptance testing, and filed detailed bug tickets in Jira. 
            Created and executed test cases to ensure coverage of the system requirements and identify potential issues.
"
              />
            </motion.div>
          </motion.div>
        </div>
      </Tab>
      <Tab eventKey="services" title="Services">
        <motion.div initial="hidden" whileInView="visible">
          <div className="content px-4">
            <h3>Services</h3>
            <Row>
              <Col lg={4} xs={12}>
                <motion.div variants={rowVariants} custom={0}>
                  <ServiceCard
                    icon={<WebIcon color="#635EE2" />}
                    servicename="Web Development"
                    text="Creating responsive, user-friendly, and scalable websites using modern technologies like React, TypeScript, and Sass/Bootstrap. Specializing in front-end development, I ensure that each project is built with a focus on aesthetics, functionality, and seamless user experience."
                  />
                </motion.div>
              </Col>

              <Col lg={4} xs={12}>
                <motion.div variants={rowVariants} custom={1}>
                  <ServiceCard
                    icon={<TestIcon color="#635EE2" />}
                    servicename="Software Testing"
                    text="Experienced in manual testing, regression testing, user acceptance testing (UAT), and bug reporting using tools like Jira. My focus is on identifying issues, ensuring that software performs optimally under various conditions, and meets user requirements."
                  />
                </motion.div>
              </Col>
            </Row>
          </div>
        </motion.div>
      </Tab>
    </Tabs>
  );
}

export default TabComponent;
