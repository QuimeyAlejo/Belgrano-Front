import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsForID, cleanDetail } from "../../redux/actions/actions";
import loading from "../../assets/assets.gif";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function DetailCard() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.detail);
  const { id } = useParams();
  const { prod } = useParams();

  useEffect(() => {
    dispatch(getProductsForID(id));
    return function () {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  if (!products) {
    return (
      <div>
        <img src={loading} alt="logoload" />
      </div>
    );
  }

  return (
    <div>
      <>
        <Button variant="primary">
          <Link to="/">Volver</Link>
        </Button>
      </>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={products.imagen} alt="logoimg" />
        <Card.Body>
          <Card.Title>{products.brand}</Card.Title>
          <Card.Text>
            <h4>Tipo: {products.tipo}</h4>
            <h4>Descripción: {products.descripcion}</h4>
            <h4>$ {products.precio}</h4>
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              axios
                .post("http://localhost:3000/payment", prod)
                .then(
                  (res) =>
                    (window.location.href = res.data.response.body.init_point)
                );
            }}
          >
            Comprar!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DetailCard;
