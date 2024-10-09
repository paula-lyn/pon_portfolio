import CardComponent from "../../card";
import QuizImage from "../../../images/Quiz.png";
import EasykayImage from "../../../images/Easykay.png";
import SectionLabel from "../../section-label";

import "./style.css";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: index * 0.3,
      },
    }),
  };

  return (
    <div className="container project" id="projects">
      <SectionLabel> Projects </SectionLabel>
      <motion.div initial="hidden" whileInView="visible">
        <Row>
          <Col lg={4} xs={12}>
            <motion.div variants={cardVariants} custom={0}>
              <CardComponent
                src={QuizImage}
                title="QuickQuiz App"
                text="The QuickQuiz App is a React.js web application that lets users test their knowledge with interactive quizzes. It offers real-time feedback and a responsive design for a smooth experience on both desktop and mobile devices."
                link="https://paula-lyn.github.io/Quick-Quiz/"
              />
            </motion.div>
          </Col>
          <Col lg={4} xs={12}>
            <motion.div variants={cardVariants} custom={1}>
              <CardComponent
                src={EasykayImage}
                title="Transport Commuting Guide System"
                text="EasyKay is a web app for Santa Maria, Bulacan commuters, offering essential info like jeepney terminals, fare costs, ETA, and distance metrics. It also integrates data from the Municipal Tourism Office to promote local tourism."
                disabled={true}
                classname="disabled"
              />
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
}

export default Projects;
