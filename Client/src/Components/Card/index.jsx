import React, { useContext } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../context/WishlistContext';
const Card = ({soyad,product}) => {
const {addWish}=useContext(WishlistContext)

  return (
    <>
    <div className="CardArea">
        <div className="CardMain">
            <div className="CardIcon">
           <Link to={`/${id}`}><IoEyeSharp /></Link> 
            </div>
            <div className="CardContent">
                <h1>{soyad}</h1>
                <li><button onClick={()=>addWish(product)}>ADD</button></li>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card