import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <h2><Link to={`/`}>Home</Link></h2>
        <ul>
            <li><Link to={`/sobremim`}>Sobre Mim</Link></li>
            <li><Link to={`/habilidades`}>Habilidades</Link></li>
            <li><Link to={`/meusprojetos`}>Meus Projetos</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar;