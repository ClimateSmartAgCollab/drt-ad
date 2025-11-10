import type { ReactNode } from 'react'
import agriLogoWhite from './assets/agri-logo-white.png'
import agriLogo from './assets/agri-logo.png'
import researchFundLogo from './assets/research-excellent-fund.png'
import genomeCanadaLogo from './assets/R.jpg'
import './App.css'

type CTA = {
  id: string
  title: string
  linkLabel: string
  linkHref: string
  body: ReactNode
}

type Content = {
  hero: {
    title: string
    subtitle: string
    heading: string
    description: string
  }
  intro: string[]
  ctas: CTA[]
  about: { heading: string; copy: string }[]
  footer: {
    poweredBy: string
    supportedBy: string
    logos: { alt: string; href: string; image: string }[]
  }
}

const content: Content = {
  hero: {
    title: 'Semantic Engine',
    subtitle: 'Agreements',
    heading: 'Helping share your work',
    description: 'Describe in custom terms how you want to make your work available',
  },
  intro: [
    'Machine-readable data agreements reduce administrative overhead and increase the accessibility and reusability of research data across disciplines and borders.',
    'By writing agreements in standardized, digital formats, researchers can ensure their terms are instantly understandable by both humans and machines.',
  ],
  ctas: [
    {
      id: 'groups',
      title: 'For Data Spaces',
      linkLabel: 'Run your own data negotiation agreement server',
      linkHref: '#',
      body: (
        <>
          For research groups, large-scale projects, or research Data Spaces, deploy our{' '}
          <a
            className="cta-highlight"
            href="https://drt-test.canadacentral.cloudapp.azure.com/"
            target="_blank"
            rel="noreferrer"
          >
            Data Request Tracker (DRT)
          </a>{' '}
          to customize questions and manage ongoing communication with data requestors. The DRT enables you to
          generate custom data licenses—both human- and machine-readable—based on the responses you collect.
        </>
      ),
    },
  ],
  about: [
    { heading: 'About the Semantic Engine', copy: '' },
  ],
  footer: {
    poweredBy: 'Powered by',
    supportedBy: 'Supported by',
    logos: [
      {
        alt: 'Agri-Food Data Canada logo',
        href: 'https://agrifooddatacanada.ca/',
        image: agriLogo,
      },
      {
        alt: 'Genome Canada logo',
        href: 'https://www.genomecanada.ca/',
        image: genomeCanadaLogo,
      },
      {
        alt: 'Canada First Research Excellence Fund logo',
        href: 'https://www.cfref-apogee.gc.ca/',
        image: researchFundLogo,
      },
    ],
  },
}

function App() {
  return (
    <main className="app-shell">
      <header className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-heading">
              <span className="hero-title">{content.hero.title}</span>
              <span className="hero-subtitle">{content.hero.subtitle}</span>
            </div>
            <div className="hero-text">
              <h1>{content.hero.heading}</h1>
              <p>{content.hero.description}</p>
            </div>
          </div>
          <div className="hero-right" aria-label="Agri-Food Data Canada">
            <a className="hero-logo-link" href="https://agrifooddatacanada.ca/" target="_blank" rel="noreferrer">
              <img src={agriLogoWhite} alt="Agri-Food Data Canada logo" />
            </a>
          </div>
        </div>
      </header>

      <section className="content-wrapper">
        <section className="intro">
          {content.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="cta-grid">
          {content.ctas.map((cta) => (
            <article key={cta.id} className={`cta-card cta-${cta.id}`}>
              <h2>{cta.title}</h2>
              <a className="cta-link" href={cta.linkHref}>
                {cta.linkLabel}
              </a>
              <p>{cta.body}</p>
            </article>
          ))}
        </section>

        <section className="about">
          {content.about.map((item) => (
            <div key={item.heading}>
              <h3>{item.heading}</h3>
              {item.copy && <p>{item.copy}</p>}
            </div>
          ))}
        </section>
      </section>

      <footer className="footer-section">
        <div className="footer-grid">
          <div className="footer-column">
            <span className="footer-label">{content.footer.poweredBy}</span>
            <a href="https://agrifooddatacanada.ca/" target="_blank" rel="noreferrer" className="footer-logo-link">
              <img src={agriLogo} alt="Agri-Food Data Canada" />
            </a>
            <span className="footer-label">{content.footer.supportedBy}</span>
            <img src={researchFundLogo} alt="Canada First Research Excellence Fund" className="footer-inline-logo" />
          </div>

          <a href="https://www.genomecanada.ca/" target="_blank" rel="noreferrer" className="footer-logo-link">
            <img src={genomeCanadaLogo} alt="Genome Canada" />
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App