import React from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./Home.css";
import logo from "../../images/logos/logo.png";
import bannerImg from "../../images/logos/Frame.png";
const Header = () => {
  return (
    <header className="header-container">
      <Container>
        <Navbar expand="md" className="pt-md-5">
          <Navbar.Brand href="#home">
            <img src={logo} alt="" style={{ width: "150px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto font-weight-bold">
              <Nav.Link href="#home" className="mr-md-5">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="mr-md-5">
                Our Portfolio
              </Nav.Link>
              <Nav.Link href="#link" className="mr-md-5">
                Our Team
              </Nav.Link>
              <Nav.Link href="#link" className="mr-md-5">
                Contact Us
              </Nav.Link>
              <Button variant="dark" type="submit">
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* banner component */}

        <Row className="pt-5">
          <Col md={6}>
            <h1 className="font-weight-bold">
              Let’s Grow Your <br /> Brand To The <br /> Next Level
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <Button variant="dark">Hire Us</Button>
          </Col>
          <Col md={6}>
            <img src={bannerImg} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
