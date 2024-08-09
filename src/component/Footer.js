import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import './Footer.css';

export default function Footer() {
  return (
  
    <footer className="footer">
      <Container>
        
        <Row>
          <Col md={3} sm={6}>
            <h5>E-Guru</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>

            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5>Popular Courses</h5>
            <ul>
              <li><a href="#">Web Development Training</a></li>
              <li><a href="#">Java Training</a></li>
              <li><a href="#">Android Training</a></li>
              <li><a href="#">Python Training</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5>Support</h5>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5>Social Media</h5>
            <ul className="social-icons">
              <li><a href="#"><Facebook /></a></li>
              <li><a href="#"><Instagram /></a></li>
              <li><a href="#"><YouTube /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bottom-bar">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <p>&copy; 2024 e-Guru Inc. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
        
      </div>
    </footer>
  );
}
