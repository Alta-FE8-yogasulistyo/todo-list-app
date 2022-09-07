import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const Listtodo = ({ list, handleDelete, handleEdit, handleDetail }) => {
  return (
    <>
      <Container>
        <Row xxl={4} xl={4} lg={4} md={2}>
          {list.map((data, index) => {
            return (
              <div key={index}>
                <Col>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title className="ms-2">{data.content}</Card.Title>
                      <Card.Text className="ms-2">{data.description}</Card.Text>
                      <Button onClick={() => handleDetail(data)} variant="primary" className="ms-2 mb-2">
                        Detail
                      </Button>
                      <br />
                      <Button onClick={() => handleEdit(data)} className="me-2 ms-2" variant="primary" type="submit">
                        Edit
                      </Button>
                      <Button onClick={() => handleDelete(data)} variant="danger" type="submit">
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
