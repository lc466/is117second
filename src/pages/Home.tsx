import React from 'react'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Lecture Q&A Assistant',
    overview: 'Retrieval-augmented assistant answering questions over lecture notes with source snippets.',
    bullets: ['RAG notebook + embeddings', 'React demo with source attribution', '6–10s demo GIF']
  },
  {
    title: 'PR Reviewer Lite',
    overview: 'Assistant that suggests focused review comments and unit-test ideas for student repos.',
    bullets: ['Static analysis + LLM suggestions', 'Test harness', 'PR flow screencast']
  },
  {
    title: 'Research Workbench — Financial RAG',
    overview: 'Prototype concept for citation-first retrieval and briefing in financial research workflows.',
    bullets: ['Secure retrieval architecture', 'Cited summaries', 'Cost/latency trade-offs']
  }
]

export default function Home() {
  return (
    <main className="container">
      <Hero />

      <section className="proof-strip" id="projects">
        <h2>Selected Projects</h2>
        <div className="cards">
          <ProjectCard
            title={projects[0].title}
            overview={projects[0].overview}
            bullets={projects[0].bullets}
          />
          <ProjectCard
            title={projects[1].title}
            overview={projects[1].overview}
            bullets={projects[1].bullets}
          />
          <ProjectCard
            title={projects[2].title}
            overview={projects[2].overview}
            bullets={projects[2].bullets}
          />
        </div>
        <div style={{marginTop:12}}>
          <Link to="/projects" className="secondary-link">View all projects</Link>
        </div>
      </section>

      <section className="skills-cta">
        <a className="primary-cta" href="#contact">Request technical resume</a>
      </section>

      <footer className="site-footer" id="contact">
        <p>Contact: <a href="mailto:you@example.com">you@example.com</a> — Newark, NJ / NYC area</p>
      </footer>
    </main>
  )
}
