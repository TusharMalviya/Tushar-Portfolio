import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/img/TusharImg.png";
import luffyHat from "../assets/img/straw-hat-png.webp";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={luffyHat} alt="Logo" />
            <p style={{ fontSize: "1.2rem", fontFamily: "'Comic Sans MS', 'Comic Neue', cursive, sans-serif", fontWeight: 700 }}>
              Not your average full stack—I'm the glitch in the matrix</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/tusharmalviya24/"><img src={navIcon1} alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon2} alt="Icon" /></a> */}
              <a href="https://www.instagram.com/tusharmalviya_/"><img src={navIcon3} alt="Icon" /></a>
              <img src={logo} alt="Logo" />
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}