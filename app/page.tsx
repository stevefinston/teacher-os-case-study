import Image from 'next/image';

const evidence = [
  ['Designed', 'Versioned specs & ADRs', 'complete'],
  ['Implemented', 'Production modules', 'complete'],
  ['Tested', '1,311 passing tests', 'complete'],
  ['Deployed', 'Vercel · Ready', 'complete'],
  ['Live-proven', 'Selected owner workflows', 'partial'],
  ['Outcomes', 'Pilot measurement pending', 'pending'],
];

const modules = [
  {
    number: '01',
    name: 'Grading Workspace',
    copy: 'Moves a response Sheet through readiness checks, workflow state, AI-assisted grading, review, reporting, and teacher-approved feedback.',
    status: 'Production',
  },
  {
    number: '02',
    name: 'Hall Pass',
    copy: 'Pairs a student check-out/check-in flow with a supervisory teacher workspace, pattern detection, student reports, and communication.',
    status: 'Production',
  },
  {
    number: '03',
    name: 'Student Support Log',
    copy: 'Turns classroom documentation into factual, editable summaries, meeting artifacts, and review-first family communication.',
    status: 'Production',
  },
  {
    number: '04',
    name: 'Directory + Students',
    copy: 'Uses Classroom-backed identity to compose a private, generated view across progress, hall-pass, and support records without storing a combined profile.',
    status: 'Production',
  },
  {
    number: '05',
    name: 'Student Progress',
    copy: 'Previews bounded Sheet or CSV sources, requires explicit confirmation, matches exact active identities, and writes one atomic teacher-owned workbook batch.',
    status: 'Core shipped',
  },
  {
    number: '06',
    name: 'AI Authoring',
    copy: 'Publishes a provider-neutral protocol for creating gradeable Google Forms with a teacher-selected personal AI; Teacher OS does not proxy the conversation.',
    status: 'Production',
  },
];

const decisions = [
  ['Teacher-owned records', 'Google Workspace is the system of record. The platform keeps pointers and operational metadata, not student payloads.'],
  ['Generated, not stored', 'Cross-module student views are assembled at request time and marked private/no-store rather than persisted as centralized profiles.'],
  ['Review before outbound', 'AI may draft; a teacher edits, confirms the recipient, and explicitly sends. No autonomous student- or family-facing communication.'],
  ['Deterministic where possible', 'Parsing, readiness checks, workflow state, and insights use testable rules. Model calls are reserved for genuinely generative work.'],
  ['Honest failure states', 'Ambiguous data is rejected or labeled setup-required, unavailable, or no-records—never silently coerced into a confident answer.'],
  ['Small release surfaces', 'Thin routes feed isolated store and pure-library layers; co-located tests and one-PR-per-deploy gates keep changes inspectable.'],
];

const skills = [
  'Product discovery from real workflows',
  'TypeScript · React · Next.js App Router',
  'API and state-machine design',
  'Google Workspace integrations',
  'Postgres metadata boundaries',
  'OAuth and least-privilege design',
  'AI workflow and prompt contracts',
  'Automated testing and CI/CD',
  'Release governance and documentation',
  'Responsive product design',
];

const storyboard = [
  ['0–10s', 'Start with the operating problem', 'Open Home. Name the fragmented work: grading, documentation, communication, and meeting preparation.'],
  ['10–25s', 'Bring in progress data', 'Preview a synthetic Classroom-style CSV, show bounded sampling and mapping, then confirm the source.'],
  ['25–42s', 'Move from records to a student story', 'Open Students for fictional Jordan Lee. Show exact-identity composition and the source/coverage states.'],
  ['42–57s', 'Show the grading workflow', 'Open a synthetic assignment. Move through compatibility, grade, review, report, and feedback milestones.'],
  ['57–70s', 'Pause at the human-control gate', 'Generate a communication draft. Edit it, verify the recipient, and stop before the explicit Send action.'],
  ['70–85s', 'Close on architecture and evidence', 'Show teacher-owned Google records, metadata-only Postgres, the test/deploy proof, and the outcomes still awaiting a pilot.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Teacher OS case study home">
          <Image
            className="brand-icon"
            src="/teacher-os-icon.png"
            alt=""
            width={35}
            height={35}
            unoptimized
          />
          <span>Teacher OS</span>
        </a>
        <nav aria-label="Case study navigation">
          <a href="#product">Product</a>
          <a href="#architecture">Architecture</a>
          <a href="#evidence">Evidence</a>
          <a href="#demo">Demo</a>
        </nav>
        <span className="case-label">Technical case study</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Classroom operations platform · 2026</p>
          <h1>Software that protects a teacher&rsquo;s time—and their judgment.</h1>
          <p className="lede">
            I designed and developed Teacher OS around the work between teaching:
            grading, documenting, communicating, and walking into a meeting prepared.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#evidence">Explore the evidence</a>
            <a className="button button-secondary" href="https://www.theteacheros.com">View Teacher OS ↗</a>
          </div>
          <p className="hero-note">Private source repository · public production site · synthetic student visuals only</p>
        </div>

        <div className="system-card" aria-label="Teacher OS architecture overview">
          <div className="system-card-head">
            <span className="window-dots"><i /><i /><i /></span>
            <span>Teacher OS · production architecture</span>
          </div>
          <div className="system-flow">
            <div className="system-node emphasis"><small>Teacher</small><strong>Decides &amp; reviews</strong></div>
            <span className="flow-arrow">→</span>
            <div className="system-node"><small>Teacher OS</small><strong>Organizes &amp; assists</strong></div>
            <span className="flow-arrow">→</span>
            <div className="system-node"><small>Google Workspace</small><strong>Owns the records</strong></div>
          </div>
          <div className="system-note"><span className="pulse" /> Student records remain in the teacher&rsquo;s workspace.</div>
        </div>
      </section>

      <section className="evidence-strip" aria-label="Evidence status">
        {evidence.slice(0, 4).map(([status, detail, level]) => (
          <div key={status} className="evidence-item">
            <span className={`status-dot ${level}`} />
            <div><strong>{status}</strong><small>{detail}</small></div>
          </div>
        ))}
      </section>

      <section className="section intro-section" id="product">
        <div className="section-kicker"><span>01</span> Product</div>
        <div className="intro-grid">
          <div>
            <p className="eyebrow">The operating problem</p>
            <h2>Classroom work is fragmented. Teacher judgment should not be.</h2>
          </div>
          <div className="prose-large">
            <p>Teachers already work across Google Forms, Sheets, Classroom, Gmail, local files, and conversations. The costly part is not collecting one more data point. It is reconstructing the story: what happened, what needs attention, what to say, and what to do next.</p>
            <p>Teacher OS adds an operational layer over those teacher-owned tools. It connects the routine work, reduces duplicate handling, and keeps the teacher—not an algorithm—as the professional making the decision.</p>
          </div>
        </div>
        <div className="audience-row">
          <div><small>Primary operator</small><strong>Classroom teacher</strong></div>
          <div><small>Workflows</small><strong>Grade · document · communicate</strong></div>
          <div><small>Meeting audiences</small><strong>Families · counselors · leaders</strong></div>
        </div>
      </section>

      <section className="section role-section">
        <div className="section-kicker"><span>02</span> My role</div>
        <div className="role-card">
          <div className="role-title">
            <p className="eyebrow">Product owner · developer · educator</p>
            <h2>I turned firsthand workflow friction into a governed software product.</h2>
          </div>
          <div className="role-list">
            <p>I owned product intent, prioritization, workflow definition, architecture and privacy decisions, release scope, and launch gates.</p>
            <p>I directed and contributed to full-stack implementation, testing, UX refinement, technical documentation, and production verification using an AI-assisted development workflow.</p>
            <p>I retained responsibility for decisions and irreversible actions; coding agents worked inside versioned rules, exact-commit review, automated checks, and narrow release boundaries.</p>
          </div>
        </div>
      </section>

      <section className="section module-section">
        <div className="section-heading">
          <div><div className="section-kicker"><span>03</span> Product system</div><h2>Modules share identity, records, and a common operating model.</h2></div>
          <p>Teacher OS is not a collection of unrelated utilities. Each workspace contributes to a connected teacher workflow while preserving its own data and action boundaries.</p>
        </div>
        <div className="module-grid">
          {modules.map((module) => (
            <article className="module-card" key={module.number}>
              <div className="module-meta"><span>{module.number}</span><em>{module.status}</em></div>
              <h3>{module.name}</h3>
              <p>{module.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallery-section">
        <div className="section-heading">
          <div><div className="section-kicker"><span>04</span> Interface evidence</div><h2>Actual product-reference states, using synthetic data.</h2></div>
          <p>These canonical repository visuals specify production interfaces or deployed workflows. They contain fictional student names and values; no live classroom records are shown.</p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-primary">
            <div className="screenshot-frame"><Image src="/product/students-overview.svg" alt="Synthetic Teacher OS Students overview for fictional student Jordan Lee" width={1536} height={1024} priority unoptimized /></div>
            <figcaption><strong>Students overview</strong><span>Deployed and production-verified · synthetic data</span></figcaption>
          </figure>
          <figure>
            <div className="screenshot-frame"><Image src="/product/grading-workspace.svg" alt="Synthetic Teacher OS Grading Workspace assignment flow" width={1536} height={1024} unoptimized /></div>
            <figcaption><strong>Grading Workspace</strong><span>Production reference · synthetic data</span></figcaption>
          </figure>
          <figure>
            <div className="screenshot-frame"><Image src="/product/student-directory.svg" alt="Synthetic Teacher OS Student Directory" width={1536} height={1024} unoptimized /></div>
            <figcaption><strong>Student Directory</strong><span>Approved deployed workflow reference · synthetic data</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="section architecture-section" id="architecture">
        <div className="section-heading light">
          <div><div className="section-kicker"><span>05</span> Architecture</div><h2>A full-stack web app around teacher-owned systems of record.</h2></div>
          <p>The architecture keeps the application useful without turning Teacher OS into the owner of student records.</p>
        </div>
        <div className="architecture-diagram" aria-label="Teacher OS architecture diagram">
          <div className="arch-column">
            <small>Experience</small>
            <div className="arch-node accent"><strong>Teacher browser</strong><span>Responsive workspaces · explicit actions</span></div>
          </div>
          <span className="arch-arrow">→</span>
          <div className="arch-column">
            <small>Application</small>
            <div className="arch-node"><strong>Next.js + React</strong><span>App Router · authenticated routes</span></div>
            <div className="arch-node"><strong>Service boundaries</strong><span>Thin routes · stores · pure libraries</span></div>
            <div className="arch-node"><strong>Tested decisions</strong><span>Workflow state · validators · guards</span></div>
          </div>
          <span className="arch-arrow">→</span>
          <div className="arch-column integrations">
            <small>Teacher-owned integrations</small>
            <div className="arch-node owner"><strong>Google Drive + Sheets</strong><span>Student data and artifacts</span></div>
            <div className="arch-node owner"><strong>Classroom + Gmail</strong><span>Roster identity · explicit sends</span></div>
            <div className="arch-node"><strong>OpenAI</strong><span>Bounded generative grading and drafts</span></div>
            <div className="arch-node"><strong>Neon Postgres</strong><span>Pointers · settings · aggregate events</span></div>
          </div>
        </div>
        <div className="stack-row">
          <span>TypeScript</span><span>React</span><span>Next.js</span><span>Vercel</span><span>Google REST APIs</span><span>Neon Postgres</span><span>Stripe</span><span>Node test runner</span>
        </div>
      </section>

      <section className="section decisions-section">
        <div className="section-heading">
          <div><div className="section-kicker"><span>06</span> Decisions</div><h2>The hard parts were boundary decisions, not feature checklists.</h2></div>
          <p>Each choice trades some convenience for trust, reversibility, or clarity—the qualities a classroom tool needs to earn.</p>
        </div>
        <div className="decision-list">
          {decisions.map(([title, copy], index) => (
            <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="section privacy-section">
        <div className="privacy-grid">
          <div>
            <div className="section-kicker"><span>07</span> Privacy &amp; responsible AI</div>
            <h2>Assist the professional. Do not replace the professional—or own their records.</h2>
          </div>
          <div className="principle-grid">
            <article><strong>Ownership</strong><p>Student work, rosters, logs, and feedback live in the teacher&rsquo;s Google Workspace.</p></article>
            <article><strong>Least privilege</strong><p>File-scoped Drive access and read-only Classroom scopes are favored over broad account access.</p></article>
            <article><strong>Human authority</strong><p>Generated grades, feedback, and communications remain reviewable; outbound communication requires explicit action.</p></article>
            <article><strong>Provider discipline</strong><p>AI contracts are versioned and bounded. Deterministic logic is used when it can do the job honestly.</p></article>
          </div>
        </div>
        <div className="ai-disclosure"><strong>How AI helped build Teacher OS</strong><p>I used ChatGPT for architecture and product review, and Claude/Codex as implementation, testing, and release collaborators. The repository assigns human ownership of scope and launch decisions, documents agent responsibilities, and requires code, tests, and deployment evidence—not trust in generated output.</p></div>
      </section>

      <section className="section evidence-section" id="evidence">
        <div className="section-heading">
          <div><div className="section-kicker"><span>08</span> Evidence</div><h2>What the project proves—and what it does not prove yet.</h2></div>
          <p>This case study deliberately separates product maturity from market validation.</p>
        </div>
        <div className="evidence-ledger">
          {evidence.map(([label, detail, level]) => (
            <article key={label} className={level}>
              <span className={`status-dot ${level}`} />
              <div><small>{label}</small><strong>{detail}</strong></div>
              <p>{
                label === 'Designed' ? 'Versioned architecture, experience principles, module specifications, ADRs, and synthetic visual references.' :
                label === 'Implemented' ? 'Production code spans the core classroom workspaces, authenticated APIs, integrations, reporting, billing, and administration.' :
                label === 'Tested' ? 'A clean checkout of current main passed typecheck, all 1,311 tests across 89 test files, and the production build.' :
                label === 'Deployed' ? 'Main CI passed and the current Vercel production deployment reported Ready.' :
                label === 'Live-proven' ? 'Repository records and deployment checks support selected authenticated owner workflows; not every path has equivalent live proof.' :
                'Instrumentation and a 5–8-teacher pilot plan exist, but no public cohort results, time-saved metric, or testimonial is established yet.'
              }</p>
            </article>
          ))}
        </div>
        <div className="evidence-callout"><span>Evidence gap</span><p>I would not publish claims such as “saves teachers X hours,” “used by schools,” or “proven at scale” without new, confirmable results.</p></div>
      </section>

      <section className="section learning-section">
        <div className="learning-grid">
          <div><div className="section-kicker"><span>09</span> Constraints &amp; learning</div><h2>Building for real work changes what “good software” means.</h2></div>
          <div className="learning-columns">
            <article><h3>What was difficult</h3><ul><li>Joining records without creating a centralized student profile</li><li>Recovering safely from ambiguous Sheets and identity data</li><li>Keeping AI useful without making it autonomous</li><li>Migrating from a mature Apps Script workflow into a web product</li><li>Separating repository success from live integration proof</li></ul></article>
            <article><h3>What I learned</h3><ul><li>Trust comes from predictable boundaries and honest empty states</li><li>Operational UX is mostly sequencing, defaults, and recovery</li><li>AI development needs explicit authority and verification contracts</li><li>Versioned product documentation can function as engineering infrastructure</li><li>Adoption evidence must be designed as deliberately as features</li></ul></article>
            <article><h3>What I would improve next</h3><ul><li>Complete the external-teacher pilot and publish verified outcomes</li><li>Create a purpose-built synthetic demo account and capture library</li><li>Run independent accessibility, dependency, and security reviews</li><li>Baseline mobile performance and core workflow latency</li><li>Reduce onboarding friction after real cohort observation</li></ul></article>
          </div>
        </div>
      </section>

      <section className="section demo-section" id="demo">
        <div className="section-heading">
          <div><div className="section-kicker"><span>10</span> 60–90 second demo</div><h2>A fast path from fragmented records to a teacher-controlled decision.</h2></div>
          <p>Run with a dedicated synthetic account. End before any real send, write, or production-data action.</p>
        </div>
        <ol className="storyboard">
          {storyboard.map(([time, title, copy]) => <li key={time}><time>{time}</time><div><strong>{title}</strong><p>{copy}</p></div></li>)}
        </ol>
      </section>

      <section className="section skills-section">
        <div className="skills-grid">
          <div><div className="section-kicker"><span>11</span> Technical skills</div><h2>Grounded in shipped work, not keyword inventory.</h2></div>
          <div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
      </section>

      <footer>
        <div className="footer-lead"><p className="eyebrow">Teacher OS · technical case study</p><h2>Practical software for friction-heavy real-world workflows.</h2></div>
        <div className="footer-links">
          <a href="https://www.theteacheros.com"><strong>Teacher OS</strong><span>Live product ↗</span></a>
          <a href="https://github.com/stevefinston"><strong>GitHub</strong><span>stevefinston ↗</span></a>
          <a href="https://www.linkedin.com/in/stevenfinston/"><strong>LinkedIn</strong><span>Professional profile ↗</span></a>
          <a href="https://www.linkedin.com/in/stevenfinston/details/featured/"><strong>Résumé</strong><span>LinkedIn Featured ↗</span></a>
        </div>
        <p className="footer-note">Prepared for employer review. Repository remains private. All student examples are synthetic.</p>
      </footer>
    </main>
  );
}
