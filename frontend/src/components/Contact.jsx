import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import axios from "axios";

/**
 * Contact Section Component
 * - Contact form with validation
 * - Contact information display
 * - Social media links
 * - Availability status
 */
const Contact = () => {
  // Get theme context for conditional styling
  const { isDark } = useTheme();

  // Form state management
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
    PhoneNumber: "",
  });

  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  /**
   * Contact information data
   */
  const contactInfo = [
    {
      icon: "bi-envelope",
      label: "Email",
      value: "ahmadgbodoti@gmail.com",
      href: "mailto:ahmadgbodoti@gmail.com",
      color: "primary",
    },
    {
      icon: "bi-telephone",
      label: "Phone",
      value: "+234 (903) 032-2692",
      href: "tel:+2349030322692",
      color: "success",
    },
    {
      icon: "bi-geo-alt",
      label: "Location",
      value: "Minna, NG",
      href: "#",
      color: "info",
    },
  ];

  /**
   * Social media links
   */
  const socialLinks = [
    {
      icon: "bi-github",
      label: "GitHub",
      href: "https://github.com/teejayidrees",
      color: "dark",
    },
    {
      icon: "bi-linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/teejayidrees",
      color: "primary",
    },
    {
      icon: "bi-twitter",
      label: "Twitter",
      href: "https://twitter.com/teejayidrees",
      color: "info",
    },
    {
      icon: "bi-instagram",
      label: "Instagram",
      href: "https://instagram.com/ahmad_._idrees",
      color: "danger",
    },
    {
      icon: "bi-whatsapp",
      href: "https://wa.me/+2349030322692",
      label: "WhatsApp",
      color: "success",
    },
  ];

  /**
   * Handle form input changes
   * @param {Event} e - Input change event
   */

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name.charAt(0).toUpperCase() + name.slice(1)]: value,
    }));
  };

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // POST form data to API endpoint
      const _ = await axios.post(
        "https://portfolio-website-backend-uf19.onrender.com/api/contacts/upload",
        formData
      );

      // Show success message
      setAlertType("success");
      setAlertMessage(
        "Thank you for your message! I'll get back to you within 24 hours."
      );
      setShowAlert(true);
      console.log(
        "Thank you for your message! I'll get back to you within 24 hours."
      );

      // Reset form
      setFormData({
        Name: "",
        Email: "",
        Subject: "",
        Message: "",
        PhoneNumber: "",
      });

      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    } catch (error) {
      // Show error message
      setAlertType("danger");
      setAlertMessage(
        "Sorry, there was an error sending your message. Please try again"
      );
      console.error(
        `Sorry, there was an error sending your message. Please try again.${error}`
      );
      setShowAlert(true);

      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Validate form data
   * @returns {boolean} Whether form is valid
   */
  const isFormValid = () => {
    return (
      formData.Name.trim() && formData.Email.trim() && formData.Message.trim()
    );
  };

  return (
    <section id="contact" className={`py-5 ${isDark ? "bg-dark" : "bg-light"}`}>
      <Container className="py-5">
        {/* Section Header */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">
              <i className="bi bi-chat-dots text-primary me-3"></i>
              Let's Work Together
            </h2>
            <p className="lead">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together!
            </p>
          </Col>
        </Row>

        <Row className="g-5">
          {/* Contact Information */}
          <Col lg={6}>
            {/* Introduction */}
            <div className="mb-5">
              <h3 className="h4 fw-bold mb-3">Get in Touch</h3>
              <p className="mb-4">
                I'm currently looking for new opportunities as a junior web
                developer. Whether you have a project in mind, want to
                collaborate, or just want to say hello, I'd love to hear from
                you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="mb-5">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className={`mb-3 border-0 shadow-sm ${
                    isDark ? "bg-dark text-light" : "bg-white"
                  }`}>
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center">
                      <div
                        className={`bg-${info.color} text-white rounded-3 d-flex align-items-center justify-content-center me-4`}
                        style={{ width: "50px", height: "50px" }}>
                        <i className={`${info.icon} fs-5`}></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">{info.label}</h6>
                        <a
                          href={info.href}
                          className={`text-decoration-none ${
                            isDark ? "text-light" : "text-dark"
                          }`}>
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>

            {/* Availability Status */}
            <Card
              className={`mb-4 border-0 ${
                isDark
                  ? "bg-success bg-opacity-10 border-success"
                  : "bg-success bg-opacity-10"
              }`}
              style={{ border: "1px solid rgba(25, 135, 84, 0.3) !important" }}>
              <Card.Body className="p-4">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-success rounded-circle me-3"
                    style={{ width: "12px", height: "12px" }}></div>
                  <div>
                    <h6 className="text-success fw-bold mb-1">
                      Available for Work
                    </h6>
                    <p className="text-success mb-0 small">
                      I'm currently seeking full-time opportunities and
                      interesting freelance projects.
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Social Links */}
            <div>
              <h5 className="fw-bold mb-3">Connect with me</h5>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-outline-${social.color} btn-lg rounded-circle`}
                    style={{ width: "50px", height: "50px" }}
                    title={social.label}>
                    <i className={`${social.icon} fs-5`}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={6}>
            <Card
              className={`border-0 shadow-lg ${
                isDark ? "bg-dark text-light" : "bg-white"
              }`}>
              <Card.Body className="p-5">
                <h3 className="h4 fw-bold mb-4">Send me a message</h3>

                {/* Success/Error Alert */}
                {showAlert && (
                  <Alert
                    variant={alertType}
                    className="mb-4"
                    dismissible
                    onClose={() => setShowAlert(false)}>
                    <div className="d-flex align-items-center">
                      <i
                        className={`bi ${
                          alertType === "success"
                            ? "bi-check-circle"
                            : "bi-exclamation-triangle"
                        } me-2`}></i>
                      {alertMessage}
                    </div>
                  </Alert>
                )}

                {/* Contact Form */}
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    {/* Name Field */}
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">
                          Name <span className="text-danger">*</span>
                        </Form.Label>

                        <Form.Control
                          type="text"
                          name="Name"
                          value={formData.Name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className={
                            isDark
                              ? "bg-secondary border-secondary text-light"
                              : ""
                          }
                        />
                      </Form.Group>
                    </Col>

                    {/* Email Field */}
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">
                          Email <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.Email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className={
                            isDark
                              ? "bg-secondary border-secondary text-light"
                              : ""
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* Subject Field */}
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-medium">Subject </Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.Subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className={
                          isDark
                            ? "bg-secondary border-secondary text-light"
                            : ""
                        }
                      />
                    </Form.Group>
                  </Col>
                  {/** Phone Number Field*/}
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-medium">
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="Number"
                        name="PhoneNumber"
                        value={formData.PhoneNumber}
                        onChange={handleInputChange}
                        placeholder="e.g. 2348123456789 (enter full number with country code, no + or spaces)"
                        className={
                          isDark
                            ? "bg-secondary border-secondary text-light"
                            : ""
                        }
                      />
                    </Form.Group>
                  </Col>
                  {/* Message Field */}
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-medium">
                        Message <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        style={{ "::placehoder": { color: "red" } }}
                        name="message"
                        value={formData.Message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hello!"
                        required
                        className={
                          isDark
                            ? "bg-secondary border-secondary text-light"
                            : ""
                        }
                      />
                    </Form.Group>
                  </Col>
                  {/* Submit Button */}
                  <Col>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={!isFormValid() || isSubmitting}
                      className="w-100 d-flex align-items-center mt-5 justify-content-center">
                      {isSubmitting ? (
                        <>
                          <div
                            className="spinner-border spinner-border-sm me-2"
                            role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send me-2"></i>
                          Send Message
                        </>
                      )}
                    </Button>
                  </Col>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

//     </section>
//   );
// };

// export default Contact;
