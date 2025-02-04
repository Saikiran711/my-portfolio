import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../Assets/nav-icon1.svg';  
import navIcon2 from '../Assets/nav-icon2.svg';  
import navIcon3 from '../Assets/nav-icon3.svg';  
import logo from '../Assets/logo (1).svg'
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
          <div className="Logo">
            <img src={logo} alt="logo" className="footer-logo" />
            </div>
          </Col>
          <Col md={6} className=" text-sm-end">
            <div className="social-icon" >
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt=" Instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
