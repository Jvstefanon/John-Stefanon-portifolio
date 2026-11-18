import './Home.css'

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Home() {
  return (
    <div>
      <section id="home" className="home-section">

        {/* NAVBAR */}
        <header className="navbar">
          <a href="#home" className="logo">
            JV<span>.</span>
          </a>

          <nav>
            <a href="#home">Home</a>
            <a href="#about">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#formacao">Formação</a>
          </nav>

          <a href="#contato" className="contact-nav">
            Contato <ArrowUpRight size={16} />
          </a>
        </header>


        {/* HERO */}
        <main className="hero-container">

          {/* TEXTO */}
          <div className="hero-content">

            <span className="hero-tag">
              Desenvolvedor Full Stack Jr.
            </span>

            <h1>
              Olá, eu sou
              <br />
              <span>João Vitor.</span>
            </h1>

            <p className="hero-description">
              Sistemas internos para o setor portuário na FIPS e sites
              sob medida para clientes internacionais pela IWS Digital.
            </p>

            <div className="hero-buttons">

              <a href="#projetos" className="primary-button">
                Ver projetos
                <ArrowUpRight size={18} />
              </a>

              <a href="#contato" className="secondary-button">
                Entre em contato
              </a>

            </div>

            {/* REDES */}
            <div className="social-container">

              <a
                href="https://www.instagram.com/_stefanonn/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button instagram"
              >
                <FaInstagram size={21} className='color-white hover:text-pink-500'/>
              </a>

              <a
                href="https://github.com/Jvstefanon"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button github"
              >
                <FaGithub size={21} className='color-white hover:text-purple-500'/>
              </a>

              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-vitor-stefanon-lopes-98a1a730b/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button linkedin"
              >
                <FaLinkedin size={21} className='color-white hover:text-blue-500'/>
              </a>

            </div>

          </div>


          {/* FOTO */}
          <div className="hero-image-area">

            <div className="image-glow"></div>

            <div className="foto-container">
              <img
                src="/img/foto-home-2.png"
                alt="Foto de João Vitor"
              />
            </div>

          </div>

        </main>


        {/* SCROLL */}
        <a href="#about" className="scroll-indicator">
          <span>Scroll para explorar</span>
          <ArrowDown size={17} />
        </a>

      </section>
    </div>
  )
}

export default Home