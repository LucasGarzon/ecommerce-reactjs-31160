import { Link } from "react-router-dom"

const Header = () => {

    
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="row m-0 p-0 header__container d-flex flex-column justify-content-center align-items-center align-items-md-start">
          <h1 className="text-light header__h1 fs-1 text-center text-md-start ms-md-5 p-0">Instrumentos Musicales </h1>
          <p className="text-light header__h1 fs-3 text-center text-md-start ms-md-5 p-0">Conocé nuestra nueva colección</p>
          <Link to={`/`} type="button" class="btn btn-light header__btn ms-md-5">Click acá</Link>
        </div>
      </div>
    </>
  )
}
export default Header