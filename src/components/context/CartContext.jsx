import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState([])

  //Sumar Total
  const sumaTotal = () => {
    const sumAll = []
    cart.forEach(e => {
      sumAll.push(e.precio * e.quantity)
    });
    const sumWithInitial = sumAll.reduce(
      (previousValue, currentValuem, index) => previousValue + currentValuem,
      0
    );
    setTotal(sumWithInitial)
    console.log(total);
  }

  //Validación 
  const isInCart = (id) => cart.find(prod => prod.id === id )

  //addToCart
  const addToCart = (producto, cantidad) => {
    const newCart = [...cart]
    const productoIsInCart = isInCart(producto.id)

    if (productoIsInCart) {
      newCart[newCart.findIndex(prod => prod.id === productoIsInCart.id)].quantity += cantidad
      setCart(newCart)
      sumaTotal()
      return
    } 
    producto.quantity = cantidad
    setCart([...newCart, producto])
    sumaTotal()
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
    sumaTotal()
  }
  
  const clear = () => setCart([])


  console.log(cart);

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