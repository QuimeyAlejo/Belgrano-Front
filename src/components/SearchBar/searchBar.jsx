import React from "react";
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../redux/actions/actions";


function SearchBar ({setCurrentPage}){
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const allProd= useSelector(state => state.allproducts)
    console.log (allProd + "quien soy")
    
  
    function handleInputChange(e){
      e.preventDefault()
      setName (e.target.value) 
      
      
    }
  
    function handleSubmit(e){
      e.preventDefault()
      console.log(name)
     
      
    //   const productFilter = allProd.filter(e => e.modelo? e.modelo : e.brand)
      const productFilter = allProd.filter(e => e.modelo.includes(name))
      if(name && (!productFilter || productFilter.length === 0)){
          alert('No existe el producto ingresado!')
      }
      
      else if(!name){
          alert('¡Para buscar ingrese un nombre!')
      }
      else{
        dispatch( getProducts(name))
          setName('')
          // setCurrentPage(1)
      }
    }
   
    return (
     <div>
        <div>
      <input 
      value={name}
        type='text' 
        placeholder='Buscar...' 
        onChange={(e)=> handleInputChange(e)}/>
        <button onClick={(e) => handleSubmit(e)}>Buscar</button>
          </div>
     </div>
    )
  
  }
  
  export default SearchBar
