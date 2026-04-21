import React from 'react'
import { Link } from 'react-router-dom'

export default function ResearchWorkbench() {
  return (
    <main className="container">
      <Link to="/projects" className="secondary-link">← Back to projects</Link>
      <h1>Research Workbench — Financial RAG</h1>
      <p className="overview">A concept workbench for secure, citation-backed retrieval and brief generation for financial research tasks.</p>

      <h2>Problem</h2>
      <p>Analysts need fast, provenance-aware briefs from mixed internal and public sources while preserving access controls and auditability.</p>

      <h2>My contribution</h2>
      <p>Defined the architecture and threat model, built a mock dataset and prototype retrieval pipeline, created demo flows that show cited summaries and confidence indicators, and documented cost/latency/privacy trade-offs.</p>

      <h2>Tools & skills</h2>
      <ul>
        <li>Vector DB concepts (Weaviate/Milvus/FAISS)</li>
        <li>LangChain patterns, OpenAI/Hugging Face integration</li>
        <li>Docker for prototype infra, React demo mock with auth</li>
        <li>Architecture diagrams and provenance evaluation</li>
      </ul>

      <h2>Why this fits</h2>
      <p>Shows systems thinking for regulated domains, design of production-ready retrieval patterns, and product framing for high-stakes applications—useful signals for FinTech or defense-adjacent roles.</p>
    </main>
  )
}
