import React, { createContext, } from 'react'
import useLocalStroge from '../hooks/useLocalStroge'

export const WishlistContext = createContext()
const WishlistProvider = ({ children }) => {
    const [wish, setWish] = useLocalStroge("wishlist")


    //Add to Wishlist
    function addWish(product) {
        const existWish = wish.findIndex(x => x._id === product._id)
        if
            (existWish === -1) {
            setWish([...wish, { ...product }])
        }

    }

    //Delete to Wishlist
    function deleteWish(product) {
        const deletedWish = wish.filter(x => x._id !== product._id)
        setWish(deletedWish)
    }
const data={
    wish,setWish,addWish,deleteWish
}
    return (
        <div>
            <WishlistContext.Provider value={data}>
                {children}
            </WishlistContext.Provider>
        </div>
    )
}

export default WishlistProvider