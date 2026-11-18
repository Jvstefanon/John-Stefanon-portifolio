import './Projects.css'

import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, ExternalLink, Folder } from "lucide-react";

// Projetos reais
const projects = [
  {
    title: "Alvorada — Balanço de Massa",
    description:
      "Sistema interno da FIPS para controle de balanço de massa no Porto de Santos. Atuei como Full Stack no módulo, que já está em produção.",
    tags: ["React", "JavaScript", "C#", "PostgreSQL", "Docker"],
    github: "",
    demo: "",
    status: "Projeto interno · Em produção",
    image: "/img/alvorada.png",
    featured: true, // ocupa 2 colunas no grid
  },
  {
    title: "A Equação da Abertura",
    description:
      "Site que estima o viés de abertura da B3 com base em ativos externos. Backend em Node.js/Express com banco PostgreSQL (Neon) e deploy no Render.",
    tags: ["Node.js", "Express", "PostgreSQL", "API"],
    github: "",
    demo: "",
    status: "Em produção",
    image: "/img/equacao.png",
  },
  {
    title: "LUKAI Sushi",
    description:
      "Site institucional para o restaurante LUKAI Sushi. Desenvolvido do zero com HTML, CSS e JavaScript puro, direto com o cliente.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: "https://lukaisushi.pt/",
    image: "/img/lukai.png",
  },
  {
    title: "Brasroute",
    description:
      "Site institucional para a Brasroute, empresa de assessoria aduaneira e logística do Porto de Santos.",
    tags: ["React", "Tailwind", "Responsivo"],
    github: "",
    demo: "https://brasroute.com.br/",
    image: "/img/brasroute.png",
  },
  {
    title: "Espaço Celebre",
    description:
      "Site para o Espaço Celebre, salão de festas e eventos em Santos. Inclui logo, identidade visual e site institucional com galeria e contato.",
    tags: ["React", "Design", "Branding"],
    github: "",
    demo: "https://espaco-celebre.onrender.com",
    image: "/img/celebre.png",
  },

];

function Projects() {
  return (
    <section id="projetos" className="page-section alt projects-section">
      <div className="section-inner">

        <div className="projects-header">
          <div className="section-header">
            <span className="section-tag">Projetos</span>
            <h2 className="section-title">
              Coisas que eu <span>construí.</span>
            </h2>
            <p className="section-description">
              Projetos profissionais e pessoais em que coloquei em prática o que
              venho estudando e aplicando no dia a dia.
            </p>
          </div>

          <a
            href="https://github.com/Jvstefanon"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button projects-all"
          >
            Ver todos no GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`glass-card project-card ${project.featured ? "featured" : ""}`}
            >

              <div className="project-cover">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-cover-placeholder">
                    <Folder size={34} />
                    <span>0{index + 1}</span>
                  </div>
                )}
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.status && (
                    <span className="project-status">{project.status}</span>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={17} /> Código
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> Ver online
                    </a>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
