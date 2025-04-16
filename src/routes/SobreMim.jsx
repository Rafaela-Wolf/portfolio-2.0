import { FaBolt } from 'react-icons/fa6';
import './SobreMim.css';

const SobreMim = () => {
  return (
    <div className='sobre-mim'>
      <h1>A cada linha de código, uma nova solução.</h1>

      <div className='atividades'>
        <p> São mais de 212 dias de experiência em desenvolvimento de software e engenharia web, com fortes habilidades em arquitetura de sistemas, integração de APIs e otimização de aplicações. Conhecimento nas seguintes atividades:</p>
        <ul class="lista-atividades">
          <li><FaBolt /> Desenvolvimento e manutenção de aplicações web escaláveis;</li>
          <li><FaBolt /> Implementação de APIs e microsserviços eficientes;</li>
          <li><FaBolt /> Testes e validações para garantir qualidade e performance;</li>
          <li><FaBolt /> Automação de processos para aumentar produtividade;</li>
          <li><FaBolt /> Gestão e otimização de bancos de dados;</li>
          <li><FaBolt /> Documentação técnica para garantir continuidade dos projetos.</li>
        </ul>
      </div>

      <div className='principais-resultados'>
        <h3>Principais resultados</h3>
        <ul class="resultados">
          <li>Redução do tempo de resposta da API em 40% com otimizações estratégicas;</li>
          <li> Diminuição de bugs críticos em 60% por meio de testes automatizados;</li>
          <li>Aumento da produtividade da equipe em 25% com automação de processos internos;</li>
          <li> Otimização de consultas SQL, reduzindo o tempo de execução em 50%;</li>
          <li>Desenvolvimento de features que impactaram diretamente a experiência do usuário final;</li>
          <li>Contribuição ativa na refatoração de código, reduzindo redundâncias e melhorando a escalabilidade.</li>
        </ul>
      </div>
    </div>
  )
}

export default SobreMim;