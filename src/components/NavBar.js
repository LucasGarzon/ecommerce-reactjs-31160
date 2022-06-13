import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import KalimbaList from './KalimbaList';
import BansuriList from './BansuriList';
import FluteList from './FluteList';

function NavBar() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  position-sticky">
        <div className="container-fluid">
          <Link to={`/`} className="navbar-brand">PAN DEL INDIO</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Bansuris
                </a>
                <BansuriList/>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Flauta Nativa
                </a>
                <FluteList/>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Kalimbas
                </a>
                <KalimbaList/>
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