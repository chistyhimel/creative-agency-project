import React from "react";
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap";
import slack from "../../images/logos/slack.png";
import google from "../../images/logos/google.png";
import uber from "../../images/logos/uber.png";
import netflix from "../../images/logos/netflix.png";
import airbnb from "../../images/logos/airbnb.png";
import serviceImg1 from "../../images/icons/service1.png";
import serviceImg2 from "../../images/icons/service2.png";
import serviceImg3 from "../../images/icons/service3.png";

const Services = () => {
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-between">
        <Col md={2}>
          <img src={slack} alt="" className="img-fluid" />
        </Col>
        <Col md={2}>
          <img src={google} alt="" className="img-fluid" />
        </Col>
        <Col md={2}>
          <img src={uber} alt="" className="img-fluid" />
        </Col>
        <Col md={2}>
          <img src={netflix} alt="" className="img-fluid" />
        </Col>
        <Col md={2} className="col-half-offset">
          <img src={airbnb} alt="" className="img-fluid" />
        </Col>
      </Row>

      {/* Service card */}

      <h2 className="text-center mt-5 mb-3">Provide awesome services</h2>
      <CardDeck>
        <Card className="text-center border-0">
          <Card.Img
            variant="top"
            src={serviceImg1}
            className="mx-auto pt-5"
            style={{ width: "100px" }}
          />
          <Card.Body>
            <Card.Title>Web & Mobile design</Card.Title>
            <Card.Text>
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center border-0">
          <Card.Img
            variant="top"
            src={serviceImg2}
            className="mx-auto pt-5"
            style={{ width: "100px" }}
          />
          <Card.Body>
            <Card.Title>Grapic design</Card.Title>
            <Card.Text>
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center border-0">
          <Card.Img
            variant="top"
            src={serviceImg3}
            className="mx-auto pt-5"
            style={{ width: "100px" }}
          />
          <Card.Body>
            <Card.Title>Web development</Card.Title>
            <Card.Text>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default Services;
