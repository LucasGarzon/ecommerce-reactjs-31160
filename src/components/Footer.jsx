import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";


const Footer = () => {
  return (
    <>
      <div className="container-fluid border-top border-dark">
        <div className="row p-3">
          <h2 className="m-0">PAN DEL INDIO</h2>
          <h4 className="m-0">Contacto</h4>
          <div className="d-flex flex-row">
            <a href="https://www.facebook.com/pandelindioflautas" target={"blank"} className="text-dark m-0 me-2 fs-3"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/pandelindio/" target={"blank"} className="text-dark m-0 me-2 fs-3"><SiInstagram /></a>
          </div>      
        </div>
      </div>
    </>
  )
}
export default Footer