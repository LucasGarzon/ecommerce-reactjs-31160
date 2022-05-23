import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  
  const [cart, setCart] = useState([])

  //Validación 
  const isInCart = (id) => cart.find(prod => prod.id === id )

  //addToCart
  const addToCart = (producto, cantidad) => {
    const newCart = [...cart]
    const productoIsInCart = isInCart(producto.id)

    if (productoIsInCart) {
      newCart[newCart.findIndex(prod => prod.id === productoIsInCart.id)].quantity += cantidad
      setCart(newCart)
      return
    } 
    producto.quantity = cantidad
    setCart([...newCart, producto])
  }
  
  //Borrar del carrito
  const removeItem = (producto) => {
    const newCart = [...cart]

    const productoIsInCart = isInCart(producto.id)

    if (!productoIsInCart) {
      return
    }

    const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

    setCart(deleteProduct)
  }
  
  const clear = () => setCart([])

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeItem,
      clear,
      setCart
    }}>{children}</CartContext.Provider>
  )
}
export default CartContextProvider