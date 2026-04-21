import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  overview: string
  bullets?: string[]
}

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function ProjectCard({ title, overview, bullets = [] }: Props) {
  const slug = slugify(title)
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p className="overview">{overview}</p>
      <ul>
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="card-actions">
        <Link className="card-link" to={`/projects/${slug}`}>Read case study</Link>
      </div>
    </article>
  )
}
