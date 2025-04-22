import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Contato.css';

const Contato = () => {
  return (
    <div className="contato">
      <h1>Quer entrar em contato comigo?</h1>
      <h2>Me envie uma mensagem!</h2>
      <ul className="redes-sociais">
        <li><a href="https://wa.me/5551982714378" target="_blank"><FaWhatsapp /></a></li>
        <li><a href="https://www.linkedin.com/in/rafaelawolf" target="_blank"><FaLinkedin /></a></li>
        <li><a href="https://github.com/Rafaela-Wolf" target="_blank"><FaGithub /></a></li>
        <li><a><FaEnvelope /></a></li>
      </ul>
    </div>
  )
}

export default Contato;