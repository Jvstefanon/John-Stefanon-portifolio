import './Contact.css'

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUpRight, ArrowUp } from "lucide-react";

// ✏️ Troque pelo seu e-mail
const EMAIL = "jvstefanon@gmail.com";

const contacts = [
  {
    name: "E-mail",
    handle: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
    className: "email",
  },
  {
    name: "LinkedIn",
    handle: "João Vitor Stefanon",
    href: "https://www.linkedin.com/in/jo%C3%A3o-vitor-stefanon-lopes-98a1a730b/",
    icon: FaLinkedin,
    className: "linkedin",
  },
  {
    name: "GitHub",
    handle: "@Jvstefanon",
    href: "https://github.com/Jvstefanon",
    icon: FaGithub,
    className: "github",
  },
  {
    name: "Instagram",
    handle: "@_stefanonn",
    href: "https://www.instagram.com/_stefanonn/",
    icon: FaInstagram,
    className: "instagram",
  },
];

function Contact() {
  return (
    <section id="contato" className="page-section alt contact-section">
      <div className="section-inner">

        <div className="contact-box">
          <div className="contact-glow"></div>

          <div className="section-header center contact-header">
            <span className="section-tag">Contato</span>
            <h2 className="section-title">
              Vamos criar algo <span>juntos?</span>
            </h2>
            <p className="section-description">
              Estou aberto a oportunidades, freelas e parcerias. Me chama em
              qualquer uma das redes abaixo.
            </p>

            <a href={`mailto:${EMAIL}`} className="primary-button contact-cta">
              Enviar e-mail
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-grid">
            {contacts.map(({ name, handle, href, icon: Icon, className }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`glass-card contact-card ${className}`}
              >
                <div className="contact-icon">
                  <Icon size={20} />
                </div>
                <div className="contact-info">
                  <small>{name}</small>
                  <span>{handle}</span>
                </div>
                <ArrowUpRight size={18} className="contact-arrow" />
              </a>
            ))}
          </div>
        </div>

        {/* RODAPÉ */}
        <footer className="footer">
          <a href="#home" className="logo">
            JV<span>.</span>
          </a>
          <p>© {new Date().getFullYear()} João Vitor. Feito com React.</p>
          <a href="#home" className="back-to-top">
            Voltar ao topo <ArrowUp size={15} />
          </a>
        </footer>

      </div>
    </section>
  )
}

export default Contact
