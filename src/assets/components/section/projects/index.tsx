import CardComponent from "../../card";
import SectionLabel from "../../section-label";

import "./style.css";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import { projects } from "../../../../data/projects";

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
          {projects
            .slice()
            .reverse()
            .map((project, idx) => (
              <Col lg={4} xs={12} key={project.title}>
                <motion.div variants={cardVariants} custom={idx}>
                  <CardComponent {...project} />
                </motion.div>
              </Col>
            ))}
        </Row>
      </motion.div>
    </div>
  );
}

export default Projects;
