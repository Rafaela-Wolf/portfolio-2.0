import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
        <h2>
          <Link to={`/`}>
            R
          </Link>
        </h2>
        <div className="hamburger" onClick={handleClick}>
          {isOpen ? <FaTimes /> : <FaBars />} 
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            <li><Link to={`/sobremim`} onClick={handleClick}>Sobre</Link></li>
            <li><Link to={`/habilidades`} onClick={handleClick}>Habilidades</Link></li>
            <li><Link to={`/meusprojetos`} onClick={handleClick}>Projetos</Link></li>
            <li><Link to={`/contato`} onClick={handleClick}>Contato</Link></li>
            <li><a href="https://docs.google.com/document/d/1G7btQbvfgSPJZZ3IcLM7fhJLwP6R7cqH/edit?usp=sharing&ouid=102288264088287806605&rtpof=true&sd=true" target="_blank" className="curriculo" onClick={handleClick}>Currículo</a></li>
        </ul>
    </nav>
  )
}

export default NavBar;