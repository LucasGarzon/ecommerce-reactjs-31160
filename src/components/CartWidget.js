import { useEffect, useState } from 'react';
import { ImCart } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { useCartContext } from './context/CartContext';




const CartWidget = () => {

  const { cart } = useCartContext()

  const [emptyCart, setEmptyCart] = useState()
  const [newQuantity, setNewQuantity] = useState()

  function cartState() {
    if (!cart.length) {
      setEmptyCart(true)
    } else {
      setEmptyCart(false)
    }
  }

  function quantityCart(){
    const allQuantity = []
    cart.forEach(e => {
      allQuantity.push(e.quantity)
    });
    const sumAllQuantity = allQuantity.reduce(
      (previousValue, currentValuem, index) => previousValue + currentValuem,
      0
    );
    setNewQuantity(sumAllQuantity)
  }

  useEffect(() => {
    cartState()
    quantityCart()
  }, [cart])

  return (

    <>
    {emptyCart ? (
      <Link to={`/cart`} className="bg-dark text-light ml-1 p-1 ms-auto me-3 p-3 fs-3" aria-current="page"><ImCart /></Link>
    ):
    (
        <Link to={`/cart`} className="bg-dark text-light ml-1 p-1 ms-auto me-3 p-3 fs-3" aria-current="page"><ImCart /></Link>
    )}
    </>

  )
}

export default CartWidget