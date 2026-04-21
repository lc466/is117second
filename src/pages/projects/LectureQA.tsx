import React from 'react'
import { Link } from 'react-router-dom'

export default function LectureQA() {
  return (
    <main className="container">
      <Link to="/projects" className="secondary-link">← Back to projects</Link>
      <h1>Lecture Q&A Assistant</h1>
      <p className="overview">A retrieval-augmented assistant that answers questions over lecture notes and slides with cited source snippets.</p>

      <h2>Problem</h2>
      <p>Students waste time searching long notes for concise explanations and worked examples.</p>

      <h2>My contribution</h2>
      <p>Collected and cleaned lecture materials, built an embeddings-based retrieval pipeline, authored the RAG notebook, and implemented a small React demo UI with source attribution and a short demo GIF.</p>

      <h2>Tools & skills</h2>
      <ul>
        <li>Python, Jupyter/Colab</li>
        <li>sentence-transformers embeddings, FAISS</li>
        <li>LangChain or lightweight orchestration, OpenAI/Hugging Face APIs</li>
        <li>React demo UI, basic QA UX</li>
      </ul>

      <h2>Why this fits</h2>
      <p>Demonstrates end-to-end applied-AI work—data prep, model integration, prototype UI, and evaluation—showing product thinking and reproducible artifacts.</p>
    </main>
  )
}
