import React, { useEffect, useState } from 'react'
import Card from '../Card'

const Products = () => {
    const[product,setProduct]=useState([])
    async function getProducts(){
        const data=await fetch("http://localhost:5000/purples")
        const res=await data.json()
        console.log(res);
        setProduct(res)
    }
    useEffect(()=>{
        getProducts()
    },[])
    console.log(product);
  return (
    <div>
        <div className="ProductsArea">
            {product&& product.map((item)=>(
                <div className="CardBox">
                    <Card key={item._id} id={item._id} soyad={item.soyad} product={item}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products