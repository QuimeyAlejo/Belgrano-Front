import React from 'react';
import '../CSS/card.css';

export default function Cards({brand, imagen, modelo, precio,tipo,key}){
 return (
    <div className='card'>
        <h5 className="contenidoh3">{tipo}</h5>
    <h3 className="contenidoh3"> {brand} </h3>
    <h3 className="contenidoh3"> {modelo} </h3>  
    <img   src={ imagen } alt="Img not found" width="200px"  height='100px'/>
    <h3> {"$"+precio} </h3>

    </div>
 )
}