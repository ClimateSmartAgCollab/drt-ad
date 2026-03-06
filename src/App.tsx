import { useState, type ChangeEvent, type ReactNode } from "react";
import drtLogo from "./assets/drt-logo.png";
import researchFundLogo from "./assets/research-excellent-fund.png";
import genomeCanadaLogo from "./assets/R.jpg";
import "./App.css";

type Content = {
  hero: {
    title: string;
    subtitle: string;
    heading: string;
    description: string;
  };
  landingSections: {
    id: string;
    title: string;
    body: ReactNode;
  }[];
  quickLinks: {
    id: string;
    label: string;
    href: string;
  }[];
  footer: {
    supportedBy: string;
    logos: { alt: string; href: string; image: string }[];
  };
};

type Language = "en" | "fr";

const QUESTIONNAIRE_PREVIEW_URL =
  "https://drt-test.canadacentral.cloudapp.azure.com/preview-questionnaire";
const DRT_DEMO_EMAIL = "adc@uoguelph.ca";

const contentByLanguage: Record<Language, Content> = {
  en: {
    hero: {
      title: "Semantic Engine",
      subtitle: "Agreements",
      heading: "Helping share your work",
      description:
        "Describe in custom terms how you want to make your work available",
    },
    landingSections: [
      {
        id: "customized-questionnaires",
        title: "Customized questionnaires",
        body: (
          <>
            <p>
              Generate custom questionnaires to ask the questions you need to
              make data or resource sharing decisions.
            </p>
            <p>
              Explore the layout and styling of questionnaires used by the DRT
              with our{" "}
              <a
                href={QUESTIONNAIRE_PREVIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="landing-link-inline"
              >
                Preview a questionnaire
              </a>
              . This preview displays a sample form, including one of its nested
              collaborator sections that requestors complete during data access
              negotiations, demonstrating how a Semantic Engine schema is
              transformed into an interactive questionnaire form.
            </p>
          </>
        ),
      },
      {
        id: "run-your-own-drt",
        title: "Run your own DRT",
        body: (
          <>
            <p>
              The DRT is an{" "}
              <a
                href="https://github.com/ClimateSmartAgCollab/DRT_Design_Document"
                target="_blank"
                rel="noreferrer"
                className="landing-link-inline"
              >
                open source
              </a>{" "}
              project hosted on GitHub. To implement the DRT you will need to
              run your own custom instance to host the questionnaires, templates
              and manage ongoing communication with data requestors.
            </p>
            <p>
              Contact us at{" "}
              <a
                href={`mailto:${DRT_DEMO_EMAIL}`}
                className="landing-link-inline"
              >
                {DRT_DEMO_EMAIL}
              </a>{" "}
              to try a DRT Demo.
            </p>
          </>
        ),
      },
    ],
    quickLinks: [
      {
        id: "preview-questionnaire",
        label: "Preview a questionnaire",
        href: QUESTIONNAIRE_PREVIEW_URL,
      },
      {
        id: "request-demo",
        label: "Email a request to try the DRT Demo",
        href: `mailto:${DRT_DEMO_EMAIL}`,
      },
    ],
    footer: {
      supportedBy: "Supported by",
      logos: [
        {
          alt: "Genome Canada logo",
          href: "https://www.genomecanada.ca/",
          image: genomeCanadaLogo,
        },
        {
          alt: "Canada First Research Excellence Fund logo",
          href: "https://www.cfref-apogee.gc.ca/",
          image: researchFundLogo,
        },
      ],
    },
  },
  fr: {
    hero: {
      title: "Moteur sémantique",
      subtitle: "Ententes",
      heading: "Faciliter le partage de vos travaux",
      description:
        "Décrivez selon vos propres conditions comment vous souhaitez rendre vos travaux disponibles",
    },
    landingSections: [
      {
        id: "questionnaires-personnalises",
        title: "Questionnaires personnalisés",
        body: (
          <>
            <p>
              Générez des questionnaires personnalisés pour poser les questions
              dont vous avez besoin afin de prendre des décisions sur le partage
              de données ou de ressources.
            </p>
            <p>
              Explorez la présentation et le style des questionnaires utilisés
              par le DRT avec notre{" "}
              <a
                href={QUESTIONNAIRE_PREVIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="landing-link-inline"
              >
                aperçu de questionnaire
              </a>
              . Cet aperçu affiche un formulaire exemple, incluant l’une de ses
              sections imbriquées de collaborateurs que les demandeur·euse·s
              remplissent durant les négociations d’accès aux données, montrant
              comment un schéma du moteur sémantique est transformé en
              questionnaire interactif.
            </p>
          </>
        ),
      },
      {
        id: "executer-votre-drt",
        title: "Exécuter votre propre DRT",
        body: (
          <>
            <p>
              Le DRT est un projet{" "}
              <a
                href="https://github.com/ClimateSmartAgCollab/DRT_Design_Document"
                target="_blank"
                rel="noreferrer"
                className="landing-link-inline"
              >
                open source
              </a>{" "}
              hébergé sur GitHub. Pour l’implémenter, vous devrez exécuter votre
              propre instance personnalisée pour héberger les questionnaires,
              les gabarits et gérer la communication continue avec les
              demandeur·euse·s de données.
            </p>
            <p>
              Écrivez-nous à{" "}
              <a
                href={`mailto:${DRT_DEMO_EMAIL}`}
                className="landing-link-inline"
              >
                {DRT_DEMO_EMAIL}
              </a>{" "}
              afin d’essayer une démo du DRT.
            </p>
          </>
        ),
      },
    ],
    quickLinks: [
      {
        id: "preview-questionnaire-fr",
        label: "Aperçu d’un questionnaire",
        href: QUESTIONNAIRE_PREVIEW_URL,
      },
      {
        id: "request-demo-fr",
        label: "Envoyer un courriel pour essayer la démo DRT",
        href: `mailto:${DRT_DEMO_EMAIL}`,
      },
    ],
    footer: {
      supportedBy: "Soutenu par",
      logos: [
        {
          alt: "Genome Canada logo",
          href: "https://www.genomecanada.ca/",
          image: genomeCanadaLogo,
        },
        {
          alt: "Canada First Research Excellence Fund logo",
          href: "https://www.cfref-apogee.gc.ca/",
          image: researchFundLogo,
        },
      ],
    },
  },
};

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [expandedLanding, setExpandedLanding] = useState<
    Record<string, boolean>
  >({});
  const content = contentByLanguage[language];

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  };

  const toggleLandingSection = (id: string) => {
    setExpandedLanding((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
  };

  return (
    <main className="app-shell">
      <header className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-heading">
              <img src={drtLogo} alt="DRT logo" className="drt-logo" />
              <div className="hero-heading-text">
                <span className="hero-title">{content.hero.title}</span>
                <span className="hero-subtitle">{content.hero.subtitle}</span>
              </div>
            </div>
            <div className="hero-text">
              <h1>{content.hero.heading}</h1>
              <p>{content.hero.description}</p>
            </div>
          </div>
          <div className="hero-right" aria-label="Language and options">
            <div className="language-toggle">
              <select
                id="language-select"
                className="language-select"
                value={language}
                onChange={handleLanguageChange}
                aria-label={
                  language === "en" ? "Select language" : "Choisir la langue"
                }
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <section className="landing-layout">
        <div className="landing-column-main">
          {content.landingSections.map((section, index) => {
            const isExpanded = expandedLanding[section.id] ?? index === 0;
            return (
              <article key={section.id} className="landing-accordion">
                <button
                  type="button"
                  className="landing-accordion-toggle"
                  onClick={() => toggleLandingSection(section.id)}
                  aria-expanded={isExpanded}
                >
                  <div className="landing-accordion-header">
                    <h2>{section.title}</h2>
                    <span
                      className={
                        isExpanded
                          ? "landing-accordion-icon landing-accordion-icon-expanded"
                          : "landing-accordion-icon"
                      }
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </div>
                </button>
                <div
                  className={
                    isExpanded
                      ? "landing-accordion-body"
                      : "landing-accordion-body landing-accordion-body-collapsed"
                  }
                >
                  {section.body}
                </div>
              </article>
            );
          })}
        </div>
        <aside
          className="quick-links-card"
          aria-label={language === "fr" ? "Liens rapides" : "Quick links"}
        >
          <h2 className="quick-links-title">
            {language === "fr" ? "Liens rapides" : "Quick Links"}
          </h2>
          <div className="quick-links-divider" />
          <div className="quick-links-list">
            {content.quickLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="quick-link-button"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </aside>
      </section>

      <footer className="footer-section">
        <div className="footer-grid">
          <div className="footer-column">
            <span className="footer-label">{content.footer.supportedBy}</span>
            <div className="footer-logos-row">
              <img
                src={researchFundLogo}
                alt="Canada First Research Excellence Fund"
                className="footer-inline-logo"
              />
              <a
                href="https://www.genomecanada.ca/"
                target="_blank"
                rel="noreferrer"
                className="footer-logo-link"
              >
                <img src={genomeCanadaLogo} alt="Genome Canada" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
