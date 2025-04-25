import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Contato.css';
import { useState } from 'react';
import { FaX } from 'react-icons/fa6';

const Contato = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className="contato">
      <h1>Quer entrar em contato comigo?</h1>
      <h2>Me envie uma mensagem!</h2>
      <ul className="redes-sociais">
        <li><a href="https://wa.me/5551982714378" target="_blank"><FaWhatsapp /></a></li>
        <li><a href="https://www.linkedin.com/in/rafaelawolf" target="_blank"><FaLinkedin /></a></li>
        <li><a href="https://github.com/Rafaela-Wolf" target="_blank"><FaGithub /></a></li>
        <li><a onClick={() => setMostrarModal(true)}><FaEnvelope /></a></li>
      </ul>

      {mostrarModal && (
        <div className="modal-overlay" onClick={() => setMostrarModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={() => setMostrarModal(false)}><FaX /></span>
            <p>rafaelawolf52@gmail.com</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contato;