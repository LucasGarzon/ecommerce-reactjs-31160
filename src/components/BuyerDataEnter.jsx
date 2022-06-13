import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext"
import swal from 'sweetalert';




const BuyerDataEnter = () => {

  const { cart } = useCartContext()
  const { clear } = useCartContext()
  
  const [total, setTotal] = useState()
  const [orderId, setOrderId] = useState()
  const [client, setClient] = useState({
    name:"",
    lastName:"",
    street:"",
    streetNumber:"",
    city:"",
    cityState:"",
    phone:"",
    email:"",
  });
  const [clientStatus, setClientStatus] = useState(false)

  useEffect(() => {
    sumaTotal()
    checkClientStatus()
    orderAlert()
  }, [client, orderId])

  //Sumar Total
  function sumaTotal() {
    const sumAll = []
    cart.forEach(e => {
      sumAll.push(e.precio * e.quantity)
    });
    const sumWithInitial = sumAll.reduce(
      (previousValue, currentValuem, index) => previousValue + currentValuem,
      0
    );
    setTotal(sumWithInitial)
  }

  function orderAlert() {
    if (orderId) {
      swal({
        title: "Muchas gracias por tu compra!",
        text: client.name + ", tu orden de compra es " + orderId + ". En breve nos contactaremos para coordinar el envío.",
        icon: "success",
        html: <Link to={`/`} className="btn btn-dark">"OK!"</Link>, 
      }).then(function () {
        window.location.href = "/";
      })
    }
  }

  //Crear orden de compra
  const SendCart = () => {
    //Extraer datos útiles del carrito
    const cartData = cart.map(({ id, nombre, precio, quantity }) => ({ id, nombre, precio, cantidad: quantity }))
    //Confiugrar Orden de compra
    const order = {
      buyer: client,
      item: cartData,
      date: Date(),
      total: total
    }
    // Llevar a firebase
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
    //Llevar la orden a consola 
    console.log(order)
    //Eliminar elementos del carrito
    clear()
  }

  function checkClientStatus() {
    if (
    client.name == "" || 
    client.lastName == "" || 
    client.street == "" || 
    client.streetNumber == "" || 
    client.city == "" || 
    client.cityState == "" || 
    client.phone == "" || 
    client.email == ""
    ) {
      setClientStatus(false)
    } else {
      setClientStatus(true)
    }
  }

  //Configurar cliente
  function handleInput(event) {
    const target = event.target;
    const value = target.value;
    const nameInput = target.name;
    setClient({ ...client , [nameInput]: value });
  }

  return (
    <>
      <div className="container-fuid">
        <div className="row p-4 m-4 d-flex flex-column flex-md-row">
          <form className="col-12 col-lg-6 p-4" id="formBuyer">
            <div className="mb-3">
              <label htmlFor="datosPersonales" className="form-label">Datos personales</label>
              <input type="text" className="form-control" id="userName" placeholder="Nombre*" name="name" onChange={(event) => handleInput(event)} value={client.name}/>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="userLastName" placeholder="Apellido*" name="lastName" onChange={(event) => handleInput(event)} value={client.lastName}/>
            </div>
            <div className="mb-3">
              <label htmlFor="userDirection" className="form-label">Dirección</label>
              <input type="text" className="form-control" id="userStreet" placeholder="Calle" name="street" onChange={(event) => handleInput(event)} value={client.street}/>
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" id="userStreetNubmer" placeholder="Nro" name="streetNumber" onChange={(event) => handleInput(event)} value={client.streetNumber}/>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="userCity" placeholder="Localidad" name="city" onChange={(event) => handleInput(event)} value={client.city}/>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="userState" placeholder="Provincia" name="cityState" onChange={(event) => handleInput(event)} value={client.cityState}/>
            </div>
            <div className="mb-3">
              <label htmlFor="userPhone" className="form-label">Contacto</label>
              <input type="tel" className="form-control" id="userPhone" placeholder="Teléfono" name="phone" onChange={(event) => handleInput(event)} value={client.phone}/>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="userEmail" placeholder="Email" name="email" onChange={(event) => handleInput(event)} value={client.email}/>
            </div>
            {!clientStatus ? (
              <button type="button" className="btn btn-dark" onClick={() => SendCart()} disabled>Finalizar compra</button>
            ) : (
              <button type="button" className="btn btn-dark" onClick={() => SendCart()}>Finalizar compra</button>
            )}
          </form>
          <div className="form__img d-none d-lg-flex col-lg-6 flex-column align-items-center justify-content-center">
            <h2 className="text-light text-center">Contacto</h2>
            <p className="text-light text-center m-0">+541164696908</p>
            <p className="text-light text-center m-0">pandelindio@gmail.com </p>
          </div> 
        </div>
      </div>
    </>
  )
}
export default BuyerDataEnter