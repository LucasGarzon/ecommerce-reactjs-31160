import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import MaskList from './MaskList';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to={`/`} className="navbar-brand">Tienda-Garzón</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="d-flex ms-auto">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={`/`} className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Items
              </a>
              <MaskList/>
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
    </>
  )
}
export default NavBar