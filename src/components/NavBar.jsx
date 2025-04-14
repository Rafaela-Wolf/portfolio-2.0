import { Link } from 'react-router-dom';
import './NavBar.css';
import { AiFillHome } from 'react-icons/ai';

const NavBar = () => {
  return (
    <nav className="navbar">
        <h2>
          <Link to={`/`}>
            <AiFillHome />
          </Link>
        </h2>
        <ul>
            <li><Link to={`/sobremim`}>Sobre</Link></li>
            <li><Link to={`/habilidades`}>Habilidades</Link></li>
            <li><Link to={`/meusprojetos`}>Projetos</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar;