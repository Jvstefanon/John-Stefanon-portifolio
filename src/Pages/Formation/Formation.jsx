import './Formation.css'

import { GraduationCap, Award, Calendar, Briefcase } from "lucide-react";

// Formação acadêmica
const education = [
  {
    title: "Sistemas de Informação",
    institution: "Universidade Santa Cecília (UNISANTA)",
    period: "Em andamento",
    description:
      "Graduação com foco em desenvolvimento de software, banco de dados, engenharia de software e gestão de sistemas.",
    current: true,
  },
  {
    title: "Ensino Médio Técnico em TI",
    institution: "Escola Fortec — São Vicente",
    period: "Concluído",
    description:
      "Formação técnica com base em programação, redes, hardware e fundamentos da tecnologia da informação.",
    current: false,
  },
];

// Experiência profissional
const experience = [
  {
    title: "Desenvolvedor Full Stack",
    institution: "FIPS — Ferrovia Interna do Porto de Santos",
    period: "Atual",
    description:
      "Desenvolvimento de sistemas internos, incluindo o módulo Balanço de Massa do Projeto Alvorada. Atuação principalmente com React e JavaScript, além de C# e PostgreSQL.",
    current: true,
  },
  {
    title: "Fundador & Desenvolvedor",
    institution: "IWS Digital",
    period: "2026 - Atual",
    description:
      "Criação de sites e sistemas para clientes do Brasil e do exterior. Desenvolvimento com React, Node.js e deploy no Render.",
    current: true,
  },
];

// Cursos e certificados (ordenados do mais recente para o mais antigo)
const courses = [
  { title: "Desenvolvimento Front-End", institution: "UNISANTA", year: "2026" },
  { title: "Inglês — Nível B2", institution: "My English Point", year: "2026" },
  { title: "IA & Produtividade no Fluxo de Desenvolvimento", institution: "UNISANTA", year: "2025" },
  { title: "Abertura Oficial (Google + Microsoft + AWS)", institution: "UNISANTA", year: "2025" },
  { title: "TI para a Indústria", institution: "Branqs Automação / FORTEC", year: "2024" },
].sort((a, b) => (Number(b.year) || 0) - (Number(a.year) || 0));

function Formation() {
  return (
    <section id="formacao" className="page-section formation-section">
      <div className="section-inner">

        <div className="section-header center">
          <span className="section-tag">Formação</span>
          <h2 className="section-title">
            Minha <span>jornada.</span>
          </h2>
          <p className="section-description">
            A base acadêmica, a experiência profissional e os cursos que me
            ajudaram a chegar até aqui.
          </p>
        </div>

        <div className="formation-grid">

          {/* ACADÊMICA */}
          <div>
            <h3 className="formation-column-title">
              <GraduationCap size={20} /> Acadêmica
            </h3>

            <div className="timeline">
              {education.map((item) => (
                <div key={item.title + item.institution} className="timeline-item">
                  <span className={`timeline-dot ${item.current ? "current" : ""}`}></span>

                  <div className="glass-card formation-card">
                    <span className="formation-period">
                      <Calendar size={14} /> {item.period}
                    </span>
                    <h4>{item.title}</h4>
                    <p className="formation-institution">{item.institution}</p>
                    <p className="formation-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIÊNCIA */}
          <div>
            <h3 className="formation-column-title">
              <Briefcase size={20} /> Experiência
            </h3>

            <div className="timeline">
              {experience.map((item) => (
                <div key={item.title + item.institution} className="timeline-item">
                  <span className={`timeline-dot ${item.current ? "current" : ""}`}></span>

                  <div className="glass-card formation-card">
                    <span className="formation-period">
                      <Calendar size={14} /> {item.period}
                    </span>
                    <h4>{item.title}</h4>
                    <p className="formation-institution">{item.institution}</p>
                    <p className="formation-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CURSOS E CERTIFICADOS (largura total, centralizado) */}
        <div className="courses-block">
          <h3 className="formation-column-title courses-title">
            <Award size={20} /> Cursos e certificados
          </h3>

          <div className="courses-list">
            {courses.map((course) => (
              <div key={course.title} className="glass-card course-card">
                <div className="course-icon">
                  <Award size={18} />
                </div>
                <div className="course-info">
                  <h4>{course.title}</h4>
                  <p>{course.institution}</p>
                </div>
                {course.year && <span className="course-year">{course.year}</span>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Formation
