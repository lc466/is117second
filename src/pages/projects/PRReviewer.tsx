import React from 'react'
import { Link } from 'react-router-dom'

export default function PRReviewer() {
  return (
    <main className="container">
      <Link to="/projects" className="secondary-link">← Back to projects</Link>
      <h1>PR Reviewer Lite</h1>
      <p className="overview">A lightweight assistant that suggests focused review comments and unit-test suggestions for student repositories.</p>

      <h2>Problem</h2>
      <p>Peer code reviews are slow and inconsistent; students and TAs need faster, reliable feedback on common issues.</p>

      <h2>My contribution</h2>
      <p>Designed the review flow, integrated static-analysis checks with LLM-generated suggestions, implemented a test-harness for automated checks, and produced a short screencast demonstrating the PR workflow.</p>

      <h2>Tools & skills</h2>
      <ul>
        <li>LLM APIs (OpenAI or similar)</li>
        <li>flake8/pyflakes, pytest</li>
        <li>Python scripting for evaluation</li>
        <li>Simple front end or CLI to present suggestions</li>
      </ul>

      <h2>Why this fits</h2>
      <p>Highlights productization of model assistance for developer workflows, evaluation of model outputs against static analysis, and practical trade-offs around trust and safety.</p>
    </main>
  )
}
