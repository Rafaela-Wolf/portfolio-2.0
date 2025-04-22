import './SobreMim.css';
import imgPerfil from '../assets/images/perfil.jpg';

const SobreMim = () => {
  return (
    <div className='sobre-mim'>
      <div className="img">
        <img src={imgPerfil} alt="Foto de perfil na página sobre mim" />
      </div>

      <div className="texto-sobre-mim">
        <p>Entusiasta desenvolvedora Full Stack, meu nome é Rafaela Wolf e encontro grande satisfação em transformar ideias inovadoras em soluções digitais concretas. A programação me fascina como a montagem de um quebra-cabeça complexo, onde cada linha de código é essencial. Essa paixão me impulsionou a aprofundar meus conhecimentos através de uma pós-graduação em Desenvolvimento Full Stack, complementando minha formação e projetos pessoais.</p>
        <br />
        <p>Sou movida pela busca contínua por aprendizado e pela concretização de projetos eficientes e impactantes. Minha experiência abrange trabalho em equipe, metodologias ágeis como Scrum e a vasta gama de serviços AWS. Valorizo a comunicação aberta, a colaboração e acredito que a tecnologia deve servir às pessoas. Com proficiência em inglês e aprimorando minhas habilidades na pós-graduação, estou pronta para aplicar minha energia e expertise em projetos desafiadores e significativos.</p>
      </div>
    </div>
  )
}

export default SobreMim;