import React from "react";

export default function Paginado({ productPerPage, allProducts, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }

  return(
    <nav>
        <ul >
        {pageNumbers && 
        pageNumbers.map(num=>(
            <button key={num} 
             onClick={()=> paginado(num)}>{num}  </button>
           
        ),)}
       
        </ul>
    </nav>
) 
}


