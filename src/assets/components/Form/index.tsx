import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";
import ButtonComponent from "../button";
import { Modal } from "react-bootstrap";
import "./style.css";

function FormComponent() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const fieldVariants = {
    hidden: { opacity: 0, x: 20 },
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const formDataObj = new FormData(form);
      setLoading(true);

      fetch(
        "https://script.google.com/macros/s/AKfycbw9sb77WtO7P2uDWIDsjpvihXUlAXAxnNnd4uz-fz4yQ8Agv5vAcP45E7Zt2JIts4JXLg/exec",
        {
          method: "POST",
          body: formDataObj,
        }
      )
        .then((response) => {
          if (response.ok) {
            setSubmitSuccess(true);
            setValidated(false);
            setFormData({
              Name: "",
              Email: "",
              Message: "",
            });
            setTimeout(() => {
              setSubmitSuccess(false);
            }, 3000);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    setValidated(true);
  };
  const handleModalClose = () => {
    setSubmitSuccess(false);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setValidated(false);
  };
  return (
    <motion.div initial="hidden" whileInView="visible">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <motion.div variants={fieldVariants} custom={0}>
          <FloatingLabel
            controlId="floatingName"
            label="Full Name"
            className="field mb-3"
          >
            <Form.Control
              required
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </FloatingLabel>
        </motion.div>
        <motion.div variants={fieldVariants} custom={1}>
          <FloatingLabel
            controlId="floatingEmail"
            label="Email address"
            className="field mb-3"
          >
            <Form.Control
              required
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
          </FloatingLabel>
        </motion.div>
        <motion.div variants={fieldVariants} custom={2}>
          <FloatingLabel
            controlId="floatingMessage"
            label="Message"
            className="field mb-3"
          >
            <Form.Control
              required
              as="textarea"
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              placeholder="Your message"
              rows={5}
            />
          </FloatingLabel>
        </motion.div>
        <motion.div variants={fieldVariants} custom={3}>
          <div className="buttons d-flex flex-column-reverse flex-md-row gap-3">
            <ButtonComponent
              type="reset"
              className="w-100 w-md-50"
              onClick={handleCancel}
            >
              Cancel
            </ButtonComponent>
            <ButtonComponent
              type="submit"
              className="submit w-100 w-md-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </ButtonComponent>
          </div>
        </motion.div>
      </Form>{" "}
      <Modal show={submitSuccess} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message was successfully sent!</Modal.Body>
        <Modal.Footer>
          <ButtonComponent onClick={handleModalClose}>Close</ButtonComponent>
        </Modal.Footer>
      </Modal>
    </motion.div>
  );
}

export default FormComponent;
