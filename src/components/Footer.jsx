import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className="container-fluid border-top border-dark">
        <div className="row p-3">
          <h2 className="m-0">PAN DEL INDIO</h2>
          <h5 className="m-0">Conocé más de la marca en nuestras redes</h5>
          <div className="d-flex flex-row align-items-center">
            <a href="https://www.facebook.com/pandelindioflautas" target={"blank"} className="text-dark m-0 me-2 fs-3"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/pandelindio/" target={"blank"} className="text-dark m-0 me-2 fs-3"><SiInstagram /></a>
            <a href="https://www.youtube.com/user/pandelindio" target={"blank"} className="text-dark m-0 me-2 fs-3"><FaYoutube /></a>
            <a href="https://www.tiktok.com/@pandelindio" target={"blank"} className="text-dark m-0 me-2 fs-3"><FaTiktok /></a>
          </div>      
        </div>
      </div>
    </>
  )
}
export default Footer