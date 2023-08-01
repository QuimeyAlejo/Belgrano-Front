
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsForID, cleanDetail } from '../../redux/actions/actions';
import loading from "../../assets/assets.gif";
import { useParams } from 'react-router-dom';

export default function DetailCard() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.detail);
  const { id } = useParams();

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
      <div>
        <button>
          <Link to='/'>Volver</Link>
        </button>
      </div>
      <div>
      <h4> {products.brand}</h4>

        <h1>{products.modelo}</h1>
      </div>
      <div>
        <img src={products.imagen} alt="logoimg" />
      </div>
      <div>
        <h4>Tipo: {products.tipo}</h4>
        <h4>Descripción: {products.descripcion}</h4>
        <h4>$ {products.precio}</h4>
      </div>
      <div>
        <button>
          <Link to="/">Comprar</Link>
        </button>
      </div>
    </div>
  );
}

