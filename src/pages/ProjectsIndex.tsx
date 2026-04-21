import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  { title: 'Lecture Q&A Assistant', slug: 'lecture-qna', metric: 'RAG demo' },
  { title: 'PR Reviewer Lite', slug: 'pr-reviewer', metric: 'Review suggestions' },
  { title: 'Research Workbench — Financial RAG', slug: 'research-workbench', metric: 'Cited briefs' }
]

export default function ProjectsIndex() {
  return (
    <main className="container">
      <h1>Projects</h1>
      <div className="cards">
        {projects.map((p) => (
          <article key={p.slug} className="project-card">
            <h3>{p.title}</h3>
            <p className="overview">{p.metric}</p>
            <Link to={`/projects/${p.slug}`} className="card-link">Open case study</Link>
          </article>
        ))}
      </div>
    </main>
  )
}
