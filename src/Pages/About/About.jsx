import './About.css'

import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiDotnet, SiTailwindcss, SiPostgresql, SiTypescript } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

// Tecnologias
const skills = [
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "JavaScript", icon: FaJs, color: "#d8d54b" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
  { name: "HTML", icon: FaHtml5, color: "#e96228" },
  { name: "CSS", icon: FaCss3Alt, color: "#2d8cf0" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "C#", icon: SiDotnet, color: "#68217a" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Git", icon: FaGitAlt, color: "#f05033" },
];

// Números
const stats = [
  { value: "+10", label: "Projetos" },
  { value: "+2", label: "Anos de experiência" },
  { value: "2+", label: "Países com clientes" },
];

function About() {
  return (
    <section id="about" className="page-section about-section">
      <div className="section-inner about-container">

        {/* FOTO */}
        <div className="about-image-area">
          <div className="about-glow"></div>

          <div className="about-foto">
            <img src="/img/foto-about-2.jpg" alt="João Vitor" />
          </div>
        </div>

        {/* TEXTO */}
        <div className="about-content">
          <span className="section-tag">Sobre mim</span>

          <h2 className="section-title">
            Do Porto de Santos ao <span>mundo digital.</span>
          </h2>

          <p className="section-description">
            Trabalho dentro do Porto de Santos. Na FIPS, desenvolvo sistemas
            internos com React e JavaScript (e C# no back-end quando precisa)
            que rodam na operação de verdade, como o
            módulo de Balanço de Massa do Projeto Alvorada, já em produção.
            É software que precisa estar certo todo dia, com dados reais e
            gente esperando por ele.
          </p>

          <p className="section-description">
            Em paralelo, toco a IWS Digital, minha empresa de desenvolvimento,
            atendendo clientes do Brasil e do exterior. Lá eu cuido de tudo,
            da primeira conversa com o cliente até o deploy. Estudo Sistemas
            de Informação na UNISANTA.
          </p>

          {/* NÚMEROS */}
          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <strong>{stat.value}</strong>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>

          {/* TECNOLOGIAS */}
          <h3 className="about-subtitle">Tecnologias</h3>

          <div className="skills-grid">
            {skills.map(({ name, icon: Icon, color }) => (
              <div key={name} className="skill-chip" style={{ "--skill-color": color }}>
                <Icon size={18} />
                <span>{name}</span>
              </div>
            ))}
          </div>

          <a href="#contato" className="primary-button about-button">
            Vamos conversar
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default About
