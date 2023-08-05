import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  filterByTypeProduct,
  filterForPrice,
} from "../../redux/actions/actions";
import Cards from "../home/card";
import Paginado from "../filter/paginado";
import loading from "../../assets/assets.gif";
import { Link } from "react-router-dom";
import Mother from "../../img/motherboard.svg";
import cpu from '../../img/cpu.svg'
import fan from '../../img/fan.svg'
import battery from '../../img/battery.svg'
import gpu from '../../img/gpu-card.svg'
import hdd from '../../img/hdd.svg'
import memory from '../../img/memory.svg'
import pc from '../../img/pc.svg'
import com from '../../img/pc-display.svg'
import fuente from "../../img/fuentepc.png"

export default function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const [order, setOrder] = useState("");

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //--------------------------------------------------------------------------------------------------//
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  //--------------------------------------------------------------------------------------------------//
  // function handlefilterByTypeProduct(e) {
  //   e.preventDefault();
  //   if (e.target.value === "All") {
  //     dispatch(getProducts());
  //   } else {
  //     dispatch(filterByTypeProduct(e.target.value));
  //     setCurrentPage(1);
  //     setOrder(`Ordenado ${e.target.value}`);
  //   }
  // }

  function handleFilterByTypeProduct(type) {
    if (type === "All") {
      dispatch(getProducts());
    } else {
      dispatch(filterByTypeProduct(type));
      setCurrentPage(1);
      setOrder(`Ordenado ${type}`);
    }
  }
  //--------------------------------------------------------------------------------------------------//

  // function handleOrderForPrice(e) {
  //   e.preventDefault();
  //   if (e.target.value === "all") {
  //     dispatch(getProducts());
  //   } else {
  //     dispatch(filterForPrice(e.target.value));
  //     setCurrentPage(1);
  //     setOrder(`Ordenado ${e.target.value}`);
  //   }
  // }

  //--------------------------------------------------------------------------------------------------//

  return (
    <div>
    <div className="d-flex">
    <button onClick={() => handleFilterByTypeProduct("All")}>
    <img src={com} alt="imagen" /> Productos
  </button>
  <button onClick={() => handleFilterByTypeProduct("Motherboard")}>
    <img src={Mother} alt="imagen" /> Motherboard
  </button>
  <button onClick={() => handleFilterByTypeProduct("Procesador")}>
    <img src={cpu} alt="imagen" /> Procesadores
  </button><button onClick={() => handleFilterByTypeProduct("GPU")}>
    <img src={gpu} alt="imagen" /> Placa de video
  </button><button onClick={() => handleFilterByTypeProduct("PowerSupply")}>
    <img src={battery} alt="imagen" /> Fuentes
  </button><button onClick={() => handleFilterByTypeProduct("Refrigeracion")}>
    <img src={fan} alt="imagen" /> Refrigerecion
  </button><button onClick={() => handleFilterByTypeProduct("RAM")}>
    <img src={memory} alt="imagen" /> Memoria RAM
  </button>
  <button onClick={() => handleFilterByTypeProduct("Almacenamiento")}>
    <img src={hdd} alt="imagen" /> Almacenamiento
  </button>
  <button onClick={() => handleFilterByTypeProduct("Gabinete")}>
    <img src={pc} alt="imagen" /> Gabinetes
  </button>
</div>

      {/* <>
        <select onChange={(e) => handlefilterByTypeProduct(e)}>
          <option value="All">Productos</option>
          <option value="Procesador">Procesadores</option>
          <option value="GPU">Placa de video</option>
          <option value="Almacenamiento">Almacenamiento</option>
          <option value="PowerSupply">Fuentes</option>
          <option value="RAM">RAM</option>
          <option value="Motherboard">Motherboard</option>
          <option value="Refrigeracion">Refrigeracion</option>
        </select>
        <select onChange={(e) => handleOrderForPrice(e)}>
          <option value="all">Precio</option>
          <option value="men">Mayor</option>
          <option value="may">Menor</option>
        </select>
      </>
      <></> */}
      <button>
        <Link to="/uploadImage">Cargar Imagen</Link>
      </button>
      <Paginado
        productPerPage={productPerPage}
        allProducts={allProducts.length}
        paginado={handlePagination}
      />
      {currentProducts.length > 0 ? (
        currentProducts.map((product, i) => (
          <div key={i}>
            <Link to={"/products/id/" + product.id}>
              <Cards
                tipo={product.tipo}
                brand={product.brand}
                modelo={product.modelo}
                imagen={product.imagen}
                precio={product.precio}
              />
            </Link>
          </div>
        ))
      ) : (
        <div>
          <img src={loading} alt="Cargando..." />
        </div>
      )}
    </div>
  );
}
