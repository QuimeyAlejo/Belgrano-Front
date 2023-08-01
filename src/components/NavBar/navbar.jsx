import React from 'react';
import { Link } from 'react-router-dom';
// import {useSelector, useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/searchBar';
import { getProducts } from '../../redux/actions/actions';
import belgrano from '../../img/belgrano.jpg';

export default function Navbar() {

  
 


  return (
    <nav >
     
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/login">Ingresar</Link>
        <Link to="/" ><img src={belgrano} alt="Recargar productos" /> </Link> 
      </div>
      <>
      <SearchBar/>
      </>
    </nav>
  );
}


