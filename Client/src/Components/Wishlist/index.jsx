import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'

const Wishlist = () => {
    const{wish,deleteWish}=useContext(WishlistContext)
  return (
    <div>
{
    wish&& wish.map(x=>
       <ul>
        <li>{x.soyad}</li>
        <li><button onClick={()=>deleteWish(x)}>Delete</button></li>
       </ul>
       
    )
}
    </div>
  )
}

export default Wishlist