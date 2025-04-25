import './Habilidades.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaNodeJs, FaDocker, FaAws, FaPython, FaJava,FaDatabase, FaCogs, FaCloud, FaProjectDiagram, FaBolt } from 'react-icons/fa';

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  // TypeScript não tem ícone em fa
  // React Native não tem ícone em fa
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  // API – adaptado com ícone de engrenagem
  { name: "API", icon: <FaCogs /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> },
  // Agile – adaptado com ícone de projeto
  { name: "Agile", icon: <FaProjectDiagram /> },
  // C – sem ícone em fa
  // MySQL – adaptado com ícone genérico de banco de dados
  { name: "MySQL", icon: <FaDatabase /> },
  // PostgreSQL – mesmo tratamento
  { name: "PostgreSQL", icon: <FaDatabase /> },
  // MongoDB – mesmo tratamento
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "Java", icon: <FaJava /> },
  // Excel – sem ícone em fa
  // CI/CD – adaptado com engrenagem
  { name: "CI/CD", icon: <FaCogs /> },
  // Cloud Computing – adaptado
  { name: "Cloud", icon: <FaCloud /> },
];

const Habilidades = () => {
  return (
    <div className="habilidades">
      <p className="frase">São mais de 2 anos de experiência em desenvolvimento de software e engenharia web, com fortes habilidades em arquitetura de sistemas, integração de APIs e otimização de aplicações.</p>

      <p className="atividades-e-tecnologias">Conhecimento nas seguintes atividades e tecnologias:</p>
      <ul>
        <li><FaBolt /> <span>Desenvolvimento e manutenção de aplicações web escaláveis;</span></li>
        <li><FaBolt /> <span>Implementação de APIs e microsserviços eficientes;</span></li>
        <li><FaBolt /> <span>Testes e validações para garantir qualidade e performance;</span></li>
        <li><FaBolt /> <span>Automação de processos para aumentar produtividade;</span></li>
        <li><FaBolt /> <span>Gestão e otimização de bancos de dados;</span></li>
        <li><FaBolt /> <span>Documentação técnica para garantir continuidade dos projetos.</span></li>
      </ul>

      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Habilidades;