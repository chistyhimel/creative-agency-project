import React from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import customer1 from "../../images/customer-1.png";
import customer2 from "../../images/customer-2.png";
import customer3 from "../../images/customer-3.png";

const ClientsFeedback = () => {
  return (
    <Container>
      <div className="mt-5">
        <h4 className="font-weight-bold text-center">Clients Feedback</h4>

        <CardDeck>
          <Card>
            <div className="align-items-center d-flex justify-content-around mt-4">
              <img
                src={customer1}
                alt=""
                className="img-fluid"
                style={{ width: "85px" }}
              />
              <div>
                <h5 className="font-weight-bold">Nisha Patrik</h5>
                <small className="text-secondary">CEO, Manpol </small>
              </div>
            </div>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                eius. Similique ipsum distinctio excepturi numquam.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <div className="align-items-center d-flex justify-content-around mt-4">
              <img
                src={customer2}
                alt=""
                className="img-fluid"
                style={{ width: "85px" }}
              />
              <div>
                <h5 className="font-weight-bold">Jon Snow</h5>
                <small className="text-secondary">CEO, GATO</small>
              </div>
            </div>

            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                eius. Similique ipsum distinctio excepturi numquam.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <div className="align-items-center d-flex justify-content-around mt-4">
              <img
                src={customer3}
                alt=""
                className="img-fluid"
                style={{ width: "85px" }}
              />
              <div>
                <h5 className="font-weight-bold text-color">Sam Will</h5>
                <small className="text-secondary">CEO, DEZEE</small>
              </div>
            </div>

            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                eius. Similique ipsum distinctio excepturi numquam.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </Container>
  );
};

export default ClientsFeedback;
