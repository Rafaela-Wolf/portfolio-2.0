import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1 className="titulo titulo-rolante">
        Bem-vindos! <span className='bolinha-cheia'>●</span> 
        Sou Rafaela Wolf <span className='bolinha-cheia'>●</span> 
        Dev Full Stack
      </h1>

      <h1 className="title animated-title">
        Welcome! <span className='bolinha-vazia'>●</span> 
        I'm Rafaela Wolf <span className='bolinha-vazia'>●</span> 
        Full Stack Dev
      </h1>
    </div>
  )
}

export default Home;