import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import MaskList from './MaskList';
import SwordList from './SwordList';

function NavBar() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  position-fixed">
        <div className="container-fluid">
          <Link to={`/`} className="navbar-brand">CHAIN.</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={`/`} className="nav-link active" aria-current="page">Tienda</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Máscaras
                </a>
                <MaskList/>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Espadas
                </a>
                <SwordList/>
              </li>
              <li className="nav-item m-0 m-lg-auto">
                <CartWidget/>
              </li>
            </ul>
          </div>
          </form>
          </div>
        </div>
        </nav>
      </div>
    </div>
    </>
  )
}
export default NavBar