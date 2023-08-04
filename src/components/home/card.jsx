import React from "react";
import "../CSS/card.css";

// export default function Cards({brand, imagen, modelo, precio,tipo,key}){
//  return (
//     <div className='card'>
//         <h5 className="contenidoh3">{tipo}</h5>
//     <h3 className="contenidoh3"> {brand} </h3>
//     <h3 className="contenidoh3"> {modelo} </h3>
//     <img   src={ imagen } alt="Img not found" width="200px"  height='100px'/>
//     <h3> {"$"+precio} </h3>

//     </div>
//  )
// }

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
