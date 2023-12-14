import { Container, Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img
        src="../../public/Rectangle 2.png"
        alt="Hero Background"
        className="hero-image"
      />
      <Container>
        <Row>
          <Col md={6} className="hero-content">
            <h1 className="hero-heading">Computer Engineering</h1>
            <p className="hero-subheading">
              142,765 Computer Engineers follow this
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
