import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import ButtonComponent from "../../button";
import ContactIconComponent from "../../contact-icons";
import MyGradPic from "../../../images/My-grad-pic-FINAL.png";

import "./style.css";

function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 30, duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 30, duration: 0.8 },
    },
    hover: {
      x: [0, 10, -10, 0], // Move right, then left, then back to the original position
      transition: {
        duration: 1, // Duration of the animation
        ease: "easeInOut", // Smooth easing
        loop: Infinity, // Repeat animation infinitely
      },
    },
  };
  return (
    <div className="container about-me d-flex align-items-center" id="about-me">
      <Row>
        <Col className="details" lg={7} xs={12}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <h1>Paula Lyn Bagagunio</h1>
            <h3>Web Developer / Software Tester</h3>
            <p>
              IT graduate from the Polytechnic University of the Philippines
              with hands-on internship experience in system design, web
              development, and database management. Proficient in HTML, CSS,
              JavaScript, PHP, and MySQL, with a focus on enhancing user
              experiences and solving real-world problems. Also experienced in
              software testing with knowledge of tools like Jira.
            </p>
            <div className="d-flex justify-content-between align-items-center flex-column-center">
              <a
                href="https://drive.google.com/file/d/19Xm5lKI-84TacOGkfns7f_jpqb4rE6wC/view?usp=drive_link"
                target="_blank"
              >
                <ButtonComponent>Resume/CV</ButtonComponent>
              </a>
              <ContactIconComponent></ContactIconComponent>
            </div>
          </motion.div>
        </Col>
        <Col
          lg={5}
          xs={12}
          className="d-flex align-items-center justify-content-center order-first-on-mobile"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={imageVariants}
            whileHover="hover" // Trigger the hover animation
          >
            <div className="border-circle">
              <img src={MyGradPic} alt="" className="circle-image" />
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe;
