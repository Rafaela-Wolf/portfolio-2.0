import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <h4>Me envie uma mensagem!</h4>
      <div className="icons">
        <a href="https://www.linkedin.com/in/rafaelawolf" target='_blank'>
          <FaLinkedin />
        </a>
        <a href="https://wa.me/5551982714378" target='_blank'>
          <FaWhatsapp />
        </a>
        <a href="https://github.com/Rafaela-Wolf" target='_blank'>
          <FaGithub />
        </a>
      </div>
    </div>
  )
}

export default Footer;