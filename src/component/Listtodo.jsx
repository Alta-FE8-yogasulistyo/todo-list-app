import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const Listtodo = ({ list, handleDelete }) => {
  return (
    <>
      <Container className="ms-auto">
        <Row xxl={4} xl={4} lg={4} md={2}>
          {list.map((data, index) => {
            return (
              <div key={index}>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>{data.content}</Card.Title>
                      <Card.Text>{data.description}</Card.Text>
                      <Button variant="primary">Go somewhere</Button> <br />
                      <Button className="me-2 ms-2" variant="primary" type="submit">
                        Edit
                      </Button>
                      <Button onClick={() => handleDelete(data)} variant="primary" type="submit">
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Listtodo;
