import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import cv from "./assets/projects/CV_Sabrine.pdf";

import coeffe from "./assets/projects/coeffe.png";
import bank from "./assets/projects/Bank-project.png";
import pizza from "./assets/projects/pizza.png";
import avatarImg from "./assets/images/avatar.png";
import trip from "./assets/projects/trip.png";
import commerce from "./assets/projects/Ecommerce.png";
import popcorn from "./assets/projects/popcorn.png";

const skills = [
  ["HTML", "HTML & CSS", "Responsive • Bootstrap • Tailwind", 90],
  [
    "AI",
    "Artificial Intelligence",
    "Deep Learning • Computer Vision • NLP",
    80,
  ],

  ["⚛", "React", "Components • Hooks • Context • Redux", 80],
  ["JS", "JavaScript", "ES6+ • Async/Await • DOM • Fetch", 80],
  ["Node", "Node.js", "Express • APIs • MongoDB", 70],

  ["🐍", "Python", "AI • Data • Automation", 50],
  ["🤖", "Robotics", "Arduino • Sensors • Motors", 60],
  ["⌘", "Git & GitHub", "Version control • Collaboration", 80],
];

const projects = [
  {
    title: "Popcorn-Movie Website",
    text: "Movie Website for discovering films with search and detailed information.",
    tags: ["HTML", "CSS", "React"],
    image: popcorn,
    href: "https://github.com/Sabrine620/PopCorn",
  },
  {
    title: "Pizza Hause",
    text: "Responsive pizza website with a modern designe and interactive menu.",
    tags: ["HTML", "CSS", "React"],
    image: pizza,
    href: "https://github.com/Sabrine620/Pizza-project",
  },
  {
    title: "Coffee Shop",
    text: "Coffee shop website with a clean modern design.",
    tags: ["HTML", "CSS", "Bootstrap"],
    image: coeffe,
    href: "https://github.com/Sabrine620/coffee-website",
  },
  {
    title: "E-Commerce Store",
    text: "Online store with products, categories and shopping features.",
    tags: ["HTML", "CSS"],
    image: commerce,
    href: "https://github.com/Sabrine620/E-commerce-project.git",
  },
  {
    title: "Travel Explorer",
    text: " App for organizing and managing travel essentials. ",
    tags: ["React", "CSS", "HTML"],
    image: trip,
    href: "https://github.com/Sabrine620/Trip_project",
  },

  {
    title: "Bank Manager ",
    text: "Developed a banking web application with money transfer functionality.",
    tags: ["JavaScript"],
    image: bank,
    href: "https://github.com/Sabrine620/Bank_Project",
  },
];

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("Home");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("Thank you! Your message is ready to be sent.");
  };

  return (
    <div className={dark ? "app dark" : "app light"}>
      <div className="bg-orb orb1" />
      <div className="bg-orb orb2" />
      <div className="particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} style={{ "--i": i }} />
        ))}
      </div>

      <header className="navbar">
        <button className="brand" onClick={() => scrollTo("home")}>
          <span className="brand-s">S</span>
          <span>Sabrine</span>
        </button>

        <nav className={menu ? "nav open" : "nav"}>
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <button
                key={item}
                className={active === item.toLowerCase() ? "active" : ""}
                onClick={() => scrollTo(item.toLowerCase())}
              >
                {item}
              </button>
            ),
          )}
        </nav>

        <div className="nav-actions">
          <a className="cv-btn" href={cv} download="CV_Sabrine.pdf">
            ↓ Download CV
          </a>

          <button className="hamburger" onClick={() => setMenu(!menu)}>
            ☰
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
            <h1>
              Hi, I'm <span>Sabrine Salah</span> 👋
            </h1>
            <h2>
              AI Engineer <b>&</b> Web Developer
            </h2>
            <p className="hero-text">
              I build intelligent and modern digital solutions to make a
              positive impact.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => scrollTo("projects")}
              >
                View My Projects <span>→</span>
              </button>
              <a className="outline-btn" href={cv} download>
                ↓ Download CV
              </a>
            </div>

            <div className="socials">
              <a
                href="https://github.com/Sabrine620/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sabrine-salah-3048baa9/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:sabrine.salah1993@gmail.com">Email</a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="code-card floating">
              <span>&lt;</span> AI <span>/&gt;</span>
              <small>React • Node.js • Robotics</small>
            </div>
            <div className="hero-glow" />
            <div className="developer-card">
              <div className="avatar">
                <img src={avatarImg} alt="" />
              </div>
            </div>
            <div className="floating-badge badge1">⚛ React</div>
            <div className="floating-badge badge2">🤖 Robotics</div>
            <div className="floating-badge badge3">🧠 AI</div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-title">
            <span>01</span>
            <div>
              <p>GET TO KNOW ME</p>
              <h2>
                About <strong>Me</strong>
              </h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-text glass">
              <h3>Passionate about technology and innovation.</h3>
              <p>
                I am an AI engineer and web developer with a strong background
                in electronics, automation, robotics and artificial
                intelligence.
              </p>
              <p>
                I enjoy building intelligent systems, creating modern web
                applications and sharing my knowledge as a trainer.
              </p>
              <div className="location">
                📍 Tunisia <span>● Available for opportunities</span>
              </div>
            </div>

            <div className="timeline-card glass">
              <Info
                icon="👩🏻‍💻"
                title="Web Development"
                text="HTML • CSS • JavaScript • React • Node.js"
              />
              <Info
                icon="🎓"
                title="Master in Artificial Intelligence"
                text="2018 • 4 semesters"
              />
              <Info
                icon="⚙"
                title="Bachelor in Electronics & Automation"
                text="Industrial Systems Engineering"
              />
              <Info
                icon="🤖"
                title="Robotics Trainer"
                text="Arduino • Sensors • Motors"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-title">
            <span>02</span>
            <div>
              <p>MY TECHNOLOGIES</p>
              <h2>
                My <strong>Skills</strong>
              </h2>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map(([icon, name, desc, level]) => (
              <div className="skill-card glass" key={name}>
                <div className="skill-icon">{icon}</div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <div className="progress">
                  <span style={{ width: `${level}%` }} />
                </div>
                <small>{level}%</small>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-title">
            <span>03</span>
            <div>
              <p>RECENT WORK</p>
              <h2>
                Featured <strong>Projects</strong>
              </h2>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card glass" key={project.title}>
                <div className="project-image">
                  <img src={project.image} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.href} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-title">
            <span>04</span>
            <div>
              <p>MY JOURNEY</p>
              <h2>
                Experience <strong>& Education</strong>
              </h2>
            </div>
          </div>

          <div className="experience-layout">
            <div className="experience-list glass">
              <Experience
                year="2025–Present"
                title="Computer Science Lecturer"
                text="University teaching experience"
              />
              <Experience
                year="2024–Present"
                title="Web Development"
                text="React • JavaScript • Node.js • CSS"
              />

              <Experience
                year="2021–2023"
                title="Robotics Trainer"
                text="Arduino • Sensors • Robotics"
              />
              <Experience
                year="2018"
                title="Master in Artificial Intelligence"
                text="Faculté de Médecine • TIM Laboratory"
              />
              <Experience
                year="2015"
                title="Bachelor in Electronics & Automation"
                text="Industrial Systems Engineering"
              />
            </div>

            <div className="quote-card glass">
              <span>“</span>
              <p>
                Technology is not just what I do,
                <br />
                it's my way of creating
                <br />a better future.
              </p>
              <b>— Sabrine ♡</b>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-title">
            <span>05</span>
            <div>
              <p>LET'S CONNECT</p>
              <h2>
                Get In <strong>Touch</strong>
              </h2>
            </div>
          </div>

          <div className="contact-grid">
            <div className="contact-info glass">
              <h3>Let's build something amazing together.</h3>
              <p>
                I'm open to new opportunities, collaborations and interesting
                projects. Feel free to contact me!
              </p>
              <a href="mailto:sabrine.salah1993@gmail.com">
                ✉ sabrine.salah1993@gmail.com
              </a>
              <span>📍 Tunisia</span>
              <div className="social-big">
                <a
                  href="https://github.com/Sabrine620/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sabrine-salah/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <form className="contact-form glass" onSubmit={submitForm}>
              <input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <button className="primary-btn" type="submit">
                Send Message →
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        © 2026 Sabrine. <span>Code today, a better tomorrow ♡</span>
      </footer>
    </div>
  );
}

function Info({ icon, title, text }) {
  return (
    <div className="info-row">
      <div className="info-icon" dangerouslySetInnerHTML={{ __html: icon }} />
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Experience({ year, title, text }) {
  return (
    <div className="experience-item">
      <div className="year">{year}</div>
      <div className="dot" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
