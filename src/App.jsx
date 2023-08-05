import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
// import LandingPage from './components/LandingPage'
import Footer from './components/Footer/footer';
import Products from './components/home/products';
import Navbar1 from './components/NavBar/navbar';
import UploadImage from '../src/components/Cloudinary'
import DetailCard from './components/Detail/detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login';





function App() {
 
  return (
    <BrowserRouter> 
    <>
    {/* <LandingPage/> */}
    <Navbar1/>
    <Routes> 
    <Route exact path='/' element={< Products/>} />
    <Route exact path='/uploadImage' element={< UploadImage/>} />
    {/* <Route exact path='/products/id/:id' render={({ match }) => <DetailCard id={match.params.id} />} /> */}
    <Route path="/products/id/:id" element={<DetailCard />} />
    {/* <Route exact path='/products/id/:id' element={<DetailCard />} /> */}
    <Route exact path="/login" element={<Login/>}/>
    {/* <Route exact path='/uploadMultipleImages' element={< Cloudinary/>} /> */}
    </Routes>
    <Footer/>
    </>
    </BrowserRouter>
  )
}

export default App

/*
    <import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realizar una solicitud GET al backend para obtener todos los productos
    axios.get('http://localhost:3525/products')
      .then(response => {
        // Actualizar el estado con los productos obtenidos del backend
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;


*/


