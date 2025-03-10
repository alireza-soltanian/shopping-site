import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-white py-4 mt-5 shadow-sm">
      <Container>
        <Row className="align-items-center text-center">
          <Col md={6} className="text-md-start">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaLinkedin size={24} />
            </a>
          </Col>
          <Col md={6} className="text-md-end mb-3 mb-md-0" >
            <p className="mt-2">
              آدرس: بابل،میدان باغ فردوس،ساختمان آپادانا <FaMapMarkerAlt className="fIcon"/>
            </p>
            <p>
             
              تلفن: 09119991008 <FaPhone className="fIcon"/>
            </p>
          </Col>
          <p className="mb-0 text-muted">© 2025 تمام حقوق این سایت محفوظ است.</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
