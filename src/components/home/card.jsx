import React from "react";
import "../CSS/card.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Cards({ brand, imagen, modelo, precio, tipo, key }) {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img src={imagen} alt="Img not found" />

            <Card.Body>
              <Card.Title>{tipo}</Card.Title>
              <Card.Text> {brand} </Card.Text>
              <Card.Text> {modelo} </Card.Text>
              <Card.Text>{"$" + precio} </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
