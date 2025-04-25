import './MeusProjetos.css';
import projetos from '../services/projetos';
import { FaGithub } from 'react-icons/fa';

const MeusProjetos = () => {
  return (
    <div className="projetos">
      <h1>Meus projetos</h1>

      <div className="meus-projetos">
        {projetos.map((projeto, index) => (
          <div className="projeto" key={index}>
            <h3>{projeto.titulo}</h3>
            <FaGithub />
            <a href={projeto.link} target='_blank'>Ver no GitHub</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MeusProjetos;