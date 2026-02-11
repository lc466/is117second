# AGENTS.md — Master Implementation Letter

## 1) The Mandate (Market Outcome)
Build a career-engineered portfolio site for an NJIT student that makes recruiters (NJ/NY market) understand my value within 5 seconds and take a specific next step.

Primary outcome (Job Seeker):
- Convert visitors into qualified leads by prompting them to request my technical resume and/or view a technical case study.

Target audience:
- Recruiters and hiring managers in NJ/NY (NYC FinTech, NJ Defense Tech, and general software/ML roles).

Success criteria:
- Clear value proposition above the fold (5-second comprehension).
- One primary CTA visible on first screen.
- At least 2–3 projects presented as “proof” with measurable outcomes.
- A working lead-gen form (or a static, deploy-friendly alternative) that captures contact info.

## 2) Tech Stack (Chosen Tools + Why)
Deployment requirement: static hosting (GitHub Pages).

Chosen stack:
- Vite + React + TypeScript (static SPA)
  - Why: fast scaffolding, clean component structure, easy to deploy on GitHub Pages, excellent DX.
- Styling: Tailwind CSS (or plain CSS if simpler)
  - Why: fast iteration, consistent spacing/typography, responsive defaults.
- Form handling: static-friendly provider (Formspree / Netlify Forms) OR mailto fallback
  - Why: no backend required; ensures “Lead-Gen form” works in static hosting.
- Optional (nice-to-have): lightweight analytics (Plausible / GA) via script tag
  - Why: verify CTA clicks and improvements.

Constraints:
- Must work as a purely static build (no server-side runtime).
- Must be accessible and mobile-first.

## 3) Sitemap (Pages + Section Copy Requirements)
Single-page is acceptable if sections are clearly separated and navigable; multi-page is also acceptable.

Required sections:
1) Hero (above the fold)
   - One-line identity: “NJIT Student | [Role] | [Domain]”
   - One-line value: “I build [X] that achieves [Y] for [audience]”
   - Primary CTA button (strong, specific)
   - Secondary CTA link (less prominent): GitHub / LinkedIn

2) Case Studies / Projects
   - 2–3 project cards minimum
   - Each card must include: Problem → Approach → Result (metrics if possible)
   - Each card links to a detail view (modal/section or separate page)

3) Proof / Skills
   - Tech stack icons or a concise skills grid
   - Optional: short “How I work” (or “What I optimize for”)

4) Lead-Gen Form (required)
   - Title: “Request My Technical Resume” (job seeker) OR “Get a Free Automation Audit” (consultant)
   - Fields: name, email, optional message
   - Confirmation state (success message) + fallback contact method

5) Footer
   - Contact links (email, LinkedIn, GitHub)
   - Location: NJ/NY area (optional)

## 4) Non-Negotiables (Hard Requirements)
- Mobile responsiveness: must look excellent on phone widths.
- SEO: include NJ/NY keywords in titles, headings, and meta tags.
  Example keywords: “NJIT”, “New Jersey”, “Newark”, “NYC”, “New York”, “FinTech”, “Defense Tech”, “Software Engineer”, “Machine Learning”.
- Professional vibe: clean layout, consistent typography, no clutter.
- Specific CTA: not “Email me”; must be a strong action phrase (see CTA section).
- Accessibility: sufficient contrast, semantic headings, keyboard navigation where applicable.
- Performance: fast load; optimize images; avoid heavy libraries.

## 5) Build Process (How You Should Work)
You are the Lead Engineer. Follow this sequence:
1) Read this AGENTS.md and propose a file/folder scaffold first.
2) Do not implement logic until scaffold is approved.
3) Implement the Hero + CTA + Project cards as static content first (MVP).
4) Then implement Lead-Gen form behavior suitable for static hosting.
5) Final pass: SEO meta tags, OG tags, mobile polish, Lighthouse sanity check.

Deliverables in repo root:
- README.md with live link + orchestration log
- This AGENTS.md
- Working codebase with deployment instructions