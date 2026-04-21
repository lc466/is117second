import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectsIndex from './pages/ProjectsIndex'
import LectureQA from './pages/projects/LectureQA'
import PRReviewer from './pages/projects/PRReviewer'
import ResearchWorkbench from './pages/projects/ResearchWorkbench'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsIndex />} />
          <Route path="/projects/lecture-qna" element={<LectureQA />} />
          <Route path="/projects/pr-reviewer" element={<PRReviewer />} />
          <Route path="/projects/research-workbench" element={<ResearchWorkbench />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
