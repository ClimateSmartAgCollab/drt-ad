import { useState, type ChangeEvent, type ReactNode } from 'react'
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

type Language = 'en' | 'fr'

const contentByLanguage: Record<Language, Content> = {
  en: {
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
        linkHref: 'https://github.com/ClimateSmartAgCollab/DRT_Design_Document/blob/main/README.md',
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
  },
  fr: {
    hero: {
      title: 'Moteur sémantique',
      subtitle: 'Ententes',
      heading: 'Faciliter le partage de vos travaux',
      description: 'Décrivez selon vos propres conditions comment vous souhaitez rendre vos travaux disponibles',
    },
    intro: [
      'Les ententes sur les données lisibles par machine réduisent les tâches administratives et accroissent l’accessibilité et la réutilisation des données de recherche à travers les disciplines et les frontières.',
      'En formulant des ententes dans des formats numériques normalisés, les chercheur·e·s garantissent que leurs conditions sont instantanément compréhensibles tant pour les humains que pour les systèmes.',
    ],
    ctas: [
      {
        id: 'groups',
        title: 'Pour les espaces de données',
        linkLabel: 'Exécutez votre propre serveur de négociation de données',
        linkHref: 'https://github.com/ClimateSmartAgCollab/DRT_Design_Document',
        body: (
          <>
            Pour les groupes de recherche, les projets à grande échelle ou les espaces de données, déployez notre{' '}
            <a
              className="cta-highlight"
              href="https://drt-test.canadacentral.cloudapp.azure.com/"
              target="_blank"
              rel="noreferrer"
            >
              Data Request Tracker (DRT)
            </a>{' '}
            afin de personnaliser les questionnaires et de gérer la communication avec les demandeur·euse·s de données.
            Le DRT vous permet de générer des licences de données sur mesure—lisibles par les humains et les machines—
            à partir des réponses recueillies.
          </>
        ),
      },
    ],
    about: [
      { heading: 'À propos du moteur sémantique', copy: '' },
    ],
    footer: {
      poweredBy: 'Propulsé par',
      supportedBy: 'Soutenu par',
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
  },
}

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const content = contentByLanguage[language]

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language)
  }

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
            <div className="language-toggle">
              <select
                id="language-select"
                className="language-select"
                value={language}
                onChange={handleLanguageChange}
                aria-label={language === 'en' ? 'Select language' : 'Choisir la langue'}
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>
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
              <a className="cta-link" href={cta.linkHref} target="_blank" rel="noreferrer">
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