import SectionLabel from "../../section-label";
import Circle from "../../circle";
import FormComponent from "../../Form";
import ContactIconComponent from "../../contact-icons";
import { motion } from "framer-motion";

import "./style.css";
import { Row, Col } from "react-bootstrap";

function Contacts() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="container contacts" id="contacts">
      <SectionLabel> Contacts </SectionLabel>
      <Row>
        <Col lg={5} xs={12}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
          >
            <Circle diameter={30} color="" id="contact-circle-one" />
            <div>
              <p>You can reach me through my social networks</p>
            </div>
            <Circle diameter={30} color="" id="contact-circle-two" />
            <div className="d-flex justify-content-center">
              <ContactIconComponent />
            </div>
          </motion.div>
        </Col>
        <Col lg={7} xs={12}>
          <FormComponent />
        </Col>
      </Row>
    </div>
  );
}

export default Contacts;
